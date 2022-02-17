import React from 'react'
import PropTypes from 'prop-types'

import { Line } from 'react-chartjs-2'

const temperatureColor = 'rgba(106, 38, 207, 0.6)'
const windChillColor = 'rgba(55, 185, 241, 0.6)'

const WeatherChart = ({ futureData }) => {
  const data = {
    labels: futureData.map((item) => item.dt_txt),
    datasets: [
      {
        label: 'Temperature',
        data: futureData.map((item) => item.main.temp),
        borderColor: [temperatureColor],
        backgroundColor: [temperatureColor],
        pointBackgroundColor: temperatureColor,
        pointBorderColor: temperatureColor,
      },
      {
        label: 'Wind chill',
        data: futureData.map((item) => item.main.feels_like),
        borderColor: [windChillColor],
        backgroundColor: [windChillColor],
        pointBackgroundColor: windChillColor,
        pointBorderColor: windChillColor,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Temperature (°C)',
            fontSize: 24,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date and hour',
            fontSize: 24,
          },
        },
      ],
    },
  }

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  )
}

WeatherChart.propTypes = {
  futureData: PropTypes.arrayOf(
    PropTypes.shape({
      dt_txt: PropTypes.string,
      main: PropTypes.shape({
        temp: PropTypes.number,
        feels_like: PropTypes.number,
      }),
    })
  ).isRequired,
}

export default WeatherChart
