'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var HugojayTimer = require('./HugojayTimer.cjsx');

// CSS
require('normalize.css');
require('../styles/main.css');

var WebpackReactTestApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <HugojayTimer />
      </div>
    );
  }
});
React.render(<WebpackReactTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = WebpackReactTestApp;
