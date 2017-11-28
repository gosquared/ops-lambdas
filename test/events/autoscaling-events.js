export const terminationHook = {
  Records: [
    {
      EventSource: 'aws:sns',
      EventVersion: '1.0',
      EventSubscriptionArn: '',
      Sns: {
        Type: 'Notification',
        MessageId: '',
        TopicArn: '',
        Subject: "Auto Scaling:  Lifecycle action 'TERMINATING' for instance i-0432d08cbcba8eaca in progress.",
        Message: '{"LifecycleHookName":"AutoscalingGroup-TerminationHook-1W2M2HEZYXMSH","AccountId":"1234567890","RequestId":"","LifecycleTransition":"autoscaling:EC2_INSTANCE_TERMINATING","AutoScalingGroupName":"AutoscalingGroup","Service":"AWS Auto Scaling","Time":"2017-11-07T18:29:13.950Z","EC2InstanceId":"i-0432d08cbcba8eaca","LifecycleActionToken":""}',
        Timestamp: '2017-11-07T18:29:13.988Z',
        SignatureVersion: '1',
        Signature: '',
        SigningCertUrl: '',
        UnsubscribeUrl: '',
        MessageAttributes: {}
      }
    }
  ]
};
