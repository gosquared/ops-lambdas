export const codepipelineJob = {
  'CodePipeline.job': {
    id: '',
    accountId: '1234567890',
    data: {
      actionConfiguration: {
        configuration: {
          FunctionName: 'ops-lambdas-prod-deployer',
          UserParameters: JSON.stringify({
            Service: 'abcd',
            EcsService: {
              Name: 'abc',
              Arn: 'abcd'
            }
          })
        }
      },
      inputArtifacts: [],
      outputArtifacts: [],
      artifactCredentials: {
        secretAccessKey: '',
        sessionToken: '',
        accessKeyId: ''
      }
    }
  }
};
