import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
let { expect } = chai;

const mochaPlugin = require('serverless-mocha-plugin');
let fn = mochaPlugin.getWrapper('EcsLifecycle', '/src/lifecycle.js', 'handler');

import { terminationHook as event } from './events';
import * as fakes from './fakes';
import { promiser } from './helpers';

import { ecs, autoscaling } from '../src/util';

function stubs() {
  return {
    listClusters:
      sinon.stub(ecs, 'listClusters')
        .returns(promiser(fakes.listClusters)),

    listContainerInstances:
      sinon.stub(ecs, 'listContainerInstances')
        .returns(promiser(fakes.listContainerInstances)),

    describeContainerInstances:
      sinon.stub(ecs, 'describeContainerInstances')
        .returns(promiser(fakes.describeContainerInstances)),

    updateContainerInstancesState:
      sinon.stub(ecs, 'updateContainerInstancesState')
        .returns(promiser({})),

    completeLifecycleAction:
      sinon.stub(autoscaling, 'completeLifecycleAction')
        .returns(promiser({})),

    wait: sinon.stub(fn.lambdaModule, 'wait').returns({})
  };
}

describe('EcsLifecycle', () => {
  it('drains container instances', async () => {
    let stubbed = stubs();
    await fn.run(event);

    expect(stubbed.describeContainerInstances)
      .to.have.been.calledTwice;

    expect(stubbed.updateContainerInstancesState)
      .to.have.been.calledOnce;

    expect(stubbed.wait)
      .to.have.been.calledOnce;

    expect(stubbed.completeLifecycleAction)
      .to.have.been.calledOnce;
  });
});
