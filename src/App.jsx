import React, { useState, useEffect } from 'react'
import './sass/main.scss'

import {
  Input,
  MainWeather,
  WeatherChart,
  BarWeather,
  SpecificData,
  Error,
  Loader,
} from './components'
import useDebounce from './hooks/useDebounce'

import { fetchData, setError } from './actions/WeatherActions'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [inputValue, setInputValue] = useState('')

  const debounce = useDebounce()
  const dispatch = useDispatch()
  const { data, futureData, error, loading } = useSelector((state) => state)

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (!inputValue && inputValue !== '') dispatch(() => setError(false))
  }, [inputValue, error, dispatch])

  useEffect(() => {
    if (inputValue) debounce(() => dispatch(fetchData(inputValue)))
  }, [inputValue, dispatch])

  return (
    <div className="App">
      <Input inputValue={inputValue} inputHandler={inputHandler} />
      {error && <Error />}
      {loading && <Loader />}
      {data && (
        <>
          <MainWeather data={data} />
          <WeatherChart futureData={futureData} />
          <BarWeather futureData={futureData} />
          <SpecificData futureData={futureData} loading={loading} />
        </>
      )}
    </div>
  )
}

export default App
