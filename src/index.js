import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import { createStore } from 'redux'
import weatherReducer from './reducers/weather'
import { Provider } from 'react-redux'

const store = createStore(weatherReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
