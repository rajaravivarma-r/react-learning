import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LineChart from './Chart.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <select>
          <option value="bar_chart">Bar Chart</option>
          <option value="line_chart">Line Chart</option>
        </select>
        <LineChart />
      </div>
    )
  }
}

export default App
