import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import { createStore, applyMiddleware } from 'redux'
import weatherReducer from './reducers/weather'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
