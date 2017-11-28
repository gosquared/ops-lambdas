import {
  createHandler, log, wait,
  ecs, autoscaling
} from './util';

async function getContainerInstance(cluster, instanceId) {
  let params = { cluster };
  log('listContainerInstances', { params });
  let result = await ecs.listContainerInstances(params).promise();
  log({ result });
  let containerInstances = result.containerInstanceArns;

  if (!containerInstances.length) return;

  params = { cluster, containerInstances };
  log('describeContainerInstances', { params });
  result = await ecs.describeContainerInstances(params).promise();
  log({ result });
  return result.containerInstances
    .find(i => i.ec2InstanceId === instanceId);
}

/**
 * Find the ECS cluster associated with the instance
 * and get the cluster name.
 */
async function getCluster(instanceId) {
  let result = await ecs.listClusters().promise();
  let cluster;

  for (cluster of result.clusterArns) {
    let containerInstance = await getContainerInstance(cluster, instanceId);
    if (containerInstance) break;
  }

  return cluster;
}

async function drainContainerInstance(cluster, containerInstanceArn) {
  let params = {
    cluster,
    containerInstances: [ containerInstanceArn ],
    status: 'DRAINING'
  };

  log('updateContainerInstancesState', { params });
  let result = await ecs.updateContainerInstancesState(params).promise();
  log({ result });

  log(`updated instance ${containerInstanceArn} state to DRAINING`, result);
  log('waiting for tasks to drain...');
  return exports.wait(40000);
}

async function completeASGLifecycle(lifecycleHookName, ASGName, lifecycleActionToken, lifecycleActionResult = 'CONTINUE') {
  let params = {
    AutoScalingGroupName: ASGName,
    LifecycleActionResult: lifecycleActionResult,
    LifecycleActionToken: lifecycleActionToken,
    LifecycleHookName: lifecycleHookName
  };
  log('completeLifecycleAction', params);
  let result = await autoscaling.completeLifecycleAction(params).promise();
  log({ result });
  return result;
}

exports.handler = createHandler(async event => {
  log(event);
  var message = JSON.parse(event.Records[0].Sns.Message);
  if (message.Event === 'autoscaling:TEST_NOTIFICATION') {
    return console.log('ignoring test notification');
  }
  var instanceId = message.EC2InstanceId;
  var ASGName = message.AutoScalingGroupName;
  var lifecycleActionToken = message.LifecycleActionToken;
  var lifecycleHookName = message.LifecycleHookName;

  console.log('instance id', instanceId);
  try {
    let cluster = await getCluster(instanceId);
    let result = await getContainerInstance(cluster, instanceId);
    let { containerInstanceArn } = result;
    await drainContainerInstance(cluster, containerInstanceArn);
  } catch (err) {
    completeASGLifecycle(lifecycleHookName, ASGName, lifecycleActionToken, 'ABANDON');
    throw err;
  }

  return completeASGLifecycle(lifecycleHookName, ASGName, lifecycleActionToken);
});

exports.wait = wait;
