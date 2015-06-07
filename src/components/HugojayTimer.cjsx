require('../styles/timer.scss');

React = require 'react/addons'
Countdown = require './Countdown.cjsx'

class HugojayTimer extends React.Component
  render: ->
    <div className="hugojay-timer">
      <div className="timer-title">Title 我是標題</div>
      <div className="timer-due">2016/12/31 剩下</div>
      <Countdown due="2016/12/31" />
    </div>

module.exports = HugojayTimer
