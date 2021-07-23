import React from 'react'
import PropTypes from 'prop-types'
import { GiWindsock } from 'react-icons/gi'
import { BiWater } from 'react-icons/bi'
import { WiBarometer } from 'react-icons/wi'

const toTextualDescription = (degree) => {
  if (degree > 337.5) return 'Northerly'
  if (degree > 292.5) return 'North Westerly'
  if (degree > 247.5) return 'Westerly'
  if (degree > 202.5) return 'South Westerly'
  if (degree > 157.5) return 'Southerly'
  if (degree > 122.5) return 'South Easterly'
  if (degree > 67.5) return 'Easterly'
  if (degree > 22.5) {
    return 'North Easterly'
  }
  return 'Northerly'
}

const SpecificData = ({ futureData }) => {
  if (!futureData.length) return 'Loading'
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
}

export default SpecificData
