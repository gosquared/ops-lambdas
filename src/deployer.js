import {
  createHandler, log,
  ecs, codePipeline
} from './util';

function jobSuccess(jobId) {
  return codePipeline.putJobSuccessResult({ jobId }).promise();
}

exports.handler = createHandler(async event => {
  log(event);
  let job = event['CodePipeline.job'];
  let jobId = job.id;
  let data = job.data;
  let args = data.actionConfiguration.configuration.UserParameters;
  args = JSON.parse(args);
  const family = args.Family;
  const service = args.EcsService.Arn;
  const cluster = args.EcsService.Cluster;
  let { taskDefinition } = await ecs.describeTaskDefinition({ taskDefinition: family }).promise();
  log(taskDefinition);
  let params = {
    family: family,
    containerDefinitions: taskDefinition.containerDefinitions
  };
  let result = await ecs.registerTaskDefinition(params).promise();
  log(result);
  params = {
    cluster, service,
    taskDefinition: result.taskDefinition.taskDefinitionArn
  };
  console.log(params);
  result = await ecs.updateService(params).promise();
  log(result);
  return jobSuccess(jobId);
});
