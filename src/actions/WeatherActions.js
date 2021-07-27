import axios from 'axios'
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_ERROR,
} from '../actiontypes/index'
import { BASE_URL } from '../constants'

export const fetchData = (inputValue) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_REQUEST,
    })

    try {
      const url = `${BASE_URL}/data/2.5/forecast?q=${inputValue}&units=metric&appid=${process.env.REACT_APP_API_WEATHER_KEY}`

      const response = await axios.get(url)

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
        error,
      })
    }
  }
}

export const setError = (error) => {
  return { type: SET_ERROR, payload: error }
}
