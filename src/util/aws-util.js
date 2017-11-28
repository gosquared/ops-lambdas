import AWS from 'aws-sdk';

export const ecs = new AWS.ECS();
export const codePipeline = new AWS.CodePipeline();
export const autoscaling = new AWS.AutoScaling();
