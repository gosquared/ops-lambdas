export const listClusters = {
  clusterArns: [
    'arn:aws:ecs:us-east-1:1234567890:cluster/default',
    'arn:aws:ecs:us-east-1:1234567890:cluster/app'
  ]
};

export const listContainerInstances = {
  containerInstanceArns: [
    'arn:aws:ecs:us-east-1:1234567890:container-instance/40fbd24b-954c-4628-834a-2a9c782f31f0'
  ]
};

export const describeContainerInstances = {
  containerInstances: [
    {
      containerInstanceArn: 'arn:aws:ecs:us-east-1:1234567890:container-instance/40fbd24b-954c-4628-834a-2a9c782f31f0',
      ec2InstanceId: 'i-0432d08cbcba8eaca',
      version: 40249,
      versionInfo: {
        agentVersion: '',
        agentHash: '',
        dockerVersion: ''
      },
      remainingResources: [ {
        name: 'CPU',
        type: 'INTEGER',
        doubleValue: 0,
        longValue: 0,
        integerValue: 768
      }, {
        name: 'MEMORY',
        type: 'INTEGER',
        doubleValue: 0,
        longValue: 0,
        integerValue: 1491
      }, {
        name: 'PORTS',
        type: 'STRINGSET',
        doubleValue: 0,
        longValue: 0,
        integerValue: 0,
        stringSetValue: [ '22', '2376', '2375', '51678', '51679' ]
      }, {
        name: 'PORTS_UDP',
        type: 'STRINGSET',
        doubleValue: 0,
        longValue: 0,
        integerValue: 0,
        stringSetValue: []
      } ],
      registeredResources: [ {
        name: 'CPU',
        type: 'INTEGER',
        doubleValue: 0,
        longValue: 0,
        integerValue: 1024
      }, {
        name: 'MEMORY',
        type: 'INTEGER',
        doubleValue: 0,
        longValue: 0,
        integerValue: 2003
      }, {
        name: 'PORTS',
        type: 'STRINGSET',
        doubleValue: 0,
        longValue: 0,
        integerValue: 0,
        stringSetValue: [ '22', '2376', '2375', '51678', '51679' ]
      }, {
        name: 'PORTS_UDP',
        type: 'STRINGSET',
        doubleValue: 0,
        longValue: 0,
        integerValue: 0,
        stringSetValue: []
      } ],
      status: 'ACTIVE',
      agentConnected: true,
      runningTasksCount: 1,
      pendingTasksCount: 0,
      agentUpdateStatus: 'UPDATED',
      attributes: [ {
        name: 'ecs.availability-zone',
        value: ''
      }, {
        name: 'com.amazonaws.ecs.capability.logging-driver.syslog'
      }, {
        name: 'ecs.ami-id',
        value: ''
      }, {
        name: 'ecs.instance-type',
        value: 't2.small'
      }, {
        name: 'com.amazonaws.ecs.capability.task-iam-role-network-host'
      }, {
        name: 'com.amazonaws.ecs.capability.logging-driver.awslogs'
      }, {
        name: 'com.amazonaws.ecs.capability.logging-driver.json-file'
      }, {
        name: 'com.amazonaws.ecs.capability.privileged-container'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.17'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.18'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.19'
      }, {
        name: 'com.amazonaws.ecs.capability.ecr-auth'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.20'
      }, {
        name: 'ecs.os-type',
        value: 'linux'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.21'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.22'
      }, {
        name: 'com.amazonaws.ecs.capability.task-iam-role'
      }, {
        name: 'com.amazonaws.ecs.capability.docker-remote-api.1.23'
      } ],
      registeredAt: '2017-02-02T17:30:41.012Z'
    }
  ],
  failures: []
};
