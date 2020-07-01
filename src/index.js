import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

function renderApp () {
  render(<App/>, document.querySelector('#app'))
}

renderApp()
if(module.hot) {
  module.hot.accept('./components/App', () => renderApp())
}