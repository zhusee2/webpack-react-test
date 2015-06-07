'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var HugojayTimer = require('./HugojayTimer.cjsx');

// CSS
require('normalize.css');
require('../styles/main.css');

var props = {
  id: '70G',
  title: '研替39梯',
  due: '2017/08/18'
};

var WebpackReactTestApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <HugojayTimer {...props} />
      </div>
    );
  }
});
React.render(<WebpackReactTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = WebpackReactTestApp;
