// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { AppContainer } from 'react-hot-loader'
import App from './app'

import './css/style.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
