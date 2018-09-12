/* global visit */
import { describe, beforeEach, afterEach } from 'mocha';
import { it } from '@bigtest/mocha';
import { expect } from 'chai';
import startApp from 'ember-quickstart/tests/helpers/start-app';
import destroyApp from 'ember-quickstart/tests/helpers/destroy-app';
import {
  clickable,
  interactor,
  text
} from '@bigtest/interactor';

const CounterInteractor = interactor({
  increment: clickable('[data-test-increment]'),
  count: text('[data-test-count]')
});

describe('Acceptance | application', function() {
  let application;
  let counter = new CounterInteractor('[data-test-counter]');

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  beforeEach(async () => {
    await visit('/');
  });

  it('has a counter', () => {
    expect(counter.isPresent).to.be.true;
  });

  it('starts at zero', () => {
    expect(counter.count).to.equal('0')
  })

  describe('Clicking on the increment button', () => {

    beforeEach(async () => {
      await counter.increment();
    });

    it('rolls count over to one', () => {
      expect(counter.count).to.equal('1');
    });
  });
});
