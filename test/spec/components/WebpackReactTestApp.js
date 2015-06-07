'use strict';

describe('WebpackReactTestApp', function () {
  var React = require('react/addons');
  var WebpackReactTestApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WebpackReactTestApp = require('components/WebpackReactTestApp.js');
    component = React.createElement(WebpackReactTestApp);
  });

  it('should create a new instance of WebpackReactTestApp', function () {
    expect(component).toBeDefined();
  });
});
