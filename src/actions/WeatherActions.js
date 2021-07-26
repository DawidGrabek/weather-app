import { FETCH_DATA } from '../actiontypes/index'

export const fetchData = (todo) => {
  return { type: FETCH_DATA, payload: todo }
}
