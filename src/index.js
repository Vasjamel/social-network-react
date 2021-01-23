import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/state-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const renderEntireDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

renderEntireDom(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderEntireDom(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
