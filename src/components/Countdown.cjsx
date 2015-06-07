React = require('react/addons')
moment = require('moment')

DATE_FORMAT = 'YYYY/MM/DD'
ONE_DAY_MILLISEC = 24 * 60 * 60 * 1000

formatTimeComponent = (component) ->
  if component < 10 then "0#{component}" else component

class Countdown extends React.Component
  calculate: =>
    dueDate = moment(@props.due, DATE_FORMAT)
    currentDate = moment()
    diffDuration = moment.duration(dueDate - currentDate)

    days = Math.floor(diffDuration.asDays())
    hours = formatTimeComponent(diffDuration.hours())
    minutes = formatTimeComponent(diffDuration.minutes())
    seconds = formatTimeComponent(diffDuration.seconds())

    @setState({
      daysLabel: days
      timeLabel: "#{hours}:#{minutes}:#{seconds}"
    })

  componentWillMount: ->
    do @calculate
    @_intervalId = window.setInterval(@calculate, 1000)

  componentWillUnmount: ->
    window.clearInterval(@_intervalId)

  render: ->
    <div className="timer-countdown">
      <strong>{@state.daysLabel}</strong> 天 {@state.timeLabel}
    </div>

module.exports = Countdown
