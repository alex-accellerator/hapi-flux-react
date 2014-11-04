'use strict';

function createStore(spec) {
  var _subscribers = [];

  function subscribe(fn) {
    _subscribers.push(fn);
  }

  function unsubscribe(fn) {
    _subscribers = _subscribers.filter(function (candidate) {
      return fn !== candidate;
    });
  }

  function informSubscribers() {
    _subscribers.forEach(function (fn) {
      fn();
    });
  }

  var methods = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    informSubscribers: informSubscribers
  };

  return Object.freeze(Object.assign(methods, spec));
}

module.exports = createStore;
