import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ChartBoard from './Chart.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showTemperature: true,
      showRelativeHumidity: true,
      showEvaporation: true
    }

    this.toggleTemperature = this.toggleTemperature.bind(this)
    this.toggleRelativeHumidity = this.toggleRelativeHumidity.bind(this)
    this.toggleEvaporation = this.toggleEvaporation.bind(this)
  }

  toggleTemperature () {
    this.setState({ showTemperature: !this.state.showTemperature })
  }

  toggleRelativeHumidity () {
    this.setState({ showRelativeHumidity: !this.state.showRelativeHumidity })
  }

  toggleEvaporation () {
    this.setState({ showEvaporation: !this.state.showEvaporation })
  }

  render () {
    return (
      <div className="App row content">
        <div className="col-sm-3 sidenav">
          <ul className="list-group">
            <li className="list-group-item">
              <label><input type="checkbox" checked={this.state.showTemperature} onChange={this.toggleTemperature} />Temperature</label>
            </li>
            <li className="list-group-item">
              <label><input type="checkbox" checked={this.state.showRelativeHumidity} onChange={this.toggleRelativeHumidity} />Relative Humidity</label>
            </li>
            <li className="list-group-item">
              <label><input type="checkbox" checked={this.state.showEvaporation} onChange={this.toggleEvaporation} />Evaporation</label>
            </li>
          </ul>
        </div>
        <div className="col-sm-9">
          <ChartBoard
            showTemperature={this.state.showTemperature}
            showRelativeHumidity={this.state.showRelativeHumidity}
            showEvaporation={this.state.showEvaporation}
          />
        </div>
      </div>
    )
  }
}

export default App
