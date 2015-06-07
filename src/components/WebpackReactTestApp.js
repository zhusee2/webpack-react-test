'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var TestComponent = require('./TestComponent.cjsx');

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var WebpackReactTestApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <TestComponent />
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<WebpackReactTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = WebpackReactTestApp;
