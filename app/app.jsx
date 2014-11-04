'use strict';

var React = require('react');
var router = require('./router.js');
var RouteStore = require('./stores/RouteStore');

var App = React.createClass({

  getInitialState: function () {
    return {
      currentPath: this.props.path
    }
  },

  componentDidMount: function () {
    RouteStore.subscribe(this.onStoreChange);
  },

  componentWillUnmount: function () {
    RouteStore.unsubscribe(this.onStoreChange);
  },

  onStoreChange: function () {
    var currentPath = RouteStore.getCurrentPath();
    this.setState({currentPath: currentPath}, function () {
      window.history.pushState(null, null, currentPath);
    });
  },

  render: function () {
    var route = router.getRouteByPath(this.state.currentPath)
    
    var section;
    if (route) {
      section = route.component(this.props);
    }

    return (
        section
    );
  }

});

module.exports = App;
