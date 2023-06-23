import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {FirstApp}  from './FirstApp'
import CounterApp from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App value={10} /> */}
    <CounterApp value={10} />
  </React.StrictMode>,
)
