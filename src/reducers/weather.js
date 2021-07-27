import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_ERROR,
} from '../actiontypes/index'

const INITIAL_STATE = {
  data: null,
  futureData: [],
  error: null,
  loading: false,
}

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        futureData: action.payload.list,
        loading: false,
      }
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case SET_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default weatherReducer
