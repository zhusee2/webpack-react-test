require('../styles/timer.scss');

React = require('react/addons')
Countdown = require('./Countdown.cjsx')

class HugojayTimer extends React.Component
  render: ->
    <div className="hugojay-timer">
      <div className="timer-title">{@props.title}</div>
      <div className="timer-due">{@props.due} 剩下</div>
      <Countdown due={@props.due} />
    </div>

module.exports = HugojayTimer
