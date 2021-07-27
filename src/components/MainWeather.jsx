import React from 'react'
import PropTypes from 'prop-types'
import { FiSunrise, FiSunset } from 'react-icons/fi'

import { setIconUrl, setTime } from '../helpers/weatherFunctions'

const MainWeather = ({ data }) => {
  const { name, sunrise, sunset } = data.city
  const { temp: tempDay } = data.list[0].main
  const { temp: tempNight } = data.list[4].main
  const { main, icon } = data.list[0].weather[0]

  return (
    <div className="main-weather">
      <span className="main-weather__sunrise-sunset">
        <FiSunrise /> {setTime(sunrise)} | {setTime(sunset)} <FiSunset />
      </span>
      <h2 className="main-weather__city">{name}</h2>
      <span className="main-weather__description">{main}</span>
      <h1 className="main-weather__temperature">{Math.round(tempDay)}°</h1>
      <span className="main-weather__day-night">
        {Math.round(tempDay)}°/{Math.round(tempNight)}°
      </span>
      <img
        src={setIconUrl(icon)}
        alt="Weather icon"
        className="main-weather__icon"
      />
    </div>
  )
}

MainWeather.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),
    list: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.shape({
          temp: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            main: PropTypes.string,
            icon: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
}

export default MainWeather
