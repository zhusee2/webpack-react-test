'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var HugojayTimer = require('./HugojayTimer.cjsx');

// CSS
require('normalize.css');
require('../styles/main.css');

var props = {
  id: '4kM',
  title: 'Title 我是標題~~~',
  due: '2016/12/11'
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
