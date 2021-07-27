import React from 'react'
import PropTypes from 'prop-types'
import { GiWindsock } from 'react-icons/gi'
import { BiWater } from 'react-icons/bi'
import { WiBarometer } from 'react-icons/wi'

import { toTextualDescription } from '../helpers/weatherFunctions'

const SpecificData = ({ futureData, loading }) => {
  if (loading) return 'Loading...'

  const { pressure, humidity } = futureData[0].main
  const { speed, deg } = futureData[0].wind

  return (
    <>
      <div className="tile">
        <GiWindsock className="tile__icon" />
        <div className="tile__specific">
          <span className="tile__specific--description">
            Speed: <b>{speed} m/s</b>
            <br />
            Direction: <b>{toTextualDescription(deg)}</b>
          </span>
        </div>
      </div>
      <div className="tile">
        <BiWater className="tile__icon" />
        <div className="tile__specific">
          <span className="tile__specific--description">
            Humidity: <b>{humidity}%</b>
          </span>
        </div>
      </div>
      <div className="tile">
        <WiBarometer className="tile__icon" />
        <div className="tile__specific">
          <span className="tile__specific--description">
            Pressure: <b>{pressure}hPa</b>
          </span>
        </div>
      </div>
    </>
  )
}

SpecificData.propTypes = {
  futureData: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.shape({
        pressure: PropTypes.number,
        humidity: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        deg: PropTypes.number,
      }),
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default SpecificData
