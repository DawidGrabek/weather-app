import React from 'react'
import PropTypes from 'prop-types'

const setTime = (time) => {
  return new Date(time * 1000).toLocaleString('en-US', { weekday: 'short' })
}

const BarWeather = ({ futureData, setIconUrl }) => {
  return (
    <ul className="bar-container">
      {futureData
        // filter 4 days ahead from tomorrow
        .filter((item, i) => !(i % 8) && i !== 0 && item)
        .map((item) => {
          const { dt } = item
          const { icon } = item.weather[0]
          const { temp } = item.main
          return (
            <li key={dt} className="bar-container__item">
              <span className="bar-container__week-day">{setTime(dt)}</span>
              <img
                src={setIconUrl(icon)}
                alt="Weather icon"
                className="bar-container__icon"
              />
              <span className="bar-container__temp">{Math.round(temp)}°C</span>
            </li>
          )
        })}
    </ul>
  )
}

BarWeather.propTypes = {
  futureData: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
        })
      ),
      main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  setIconUrl: PropTypes.func.isRequired,
}

export default BarWeather
