import React, { useState, useEffect } from 'react'

import './App.css'
import { BASE_URL, BASE_URL_IMG } from './constants'
import {
  Input,
  MainWeather,
  WeatherChart,
  BarWeather,
  SpecificData,
  Error,
} from './components'
import useDebounce from './hooks/useDebounce'

const setIconUrl = (icon) => `${BASE_URL_IMG}/${icon}@2x.png`

function App() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [futureData, setFutureData] = useState([])
  const debounce = useDebounce()

  useEffect(() => {
    if (!inputValue) setError(false)
  }, [inputValue, error])

  const inputHandler = (e) => {
    setInputValue(e.target.value)

    debounce(() => {
      const url = `${BASE_URL}/data/2.5/forecast?q=${e.target.value}&units=metric&appid=${process.env.REACT_APP_API_WEATHER_KEY}`

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            setError(true)
            throw Error('Something went wrong')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setFutureData(data.list)
          setError(false)
        })
        .catch(() => {
          setError(true)
        })
    })
  }

  return (
    <div className="App">
      <Input inputValue={inputValue} inputHandler={inputHandler} />
      {error && <Error />}
      {data && (
        <>
          <MainWeather data={data} setIconUrl={setIconUrl} />
          <WeatherChart futureData={futureData} />
          <BarWeather futureData={futureData} setIconUrl={setIconUrl} />
          <SpecificData futureData={futureData} />
        </>
      )}
    </div>
  )
}

export default App
