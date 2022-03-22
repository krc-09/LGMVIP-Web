import React, { Component } from 'react'
import './App.css'

import Apifetch from './components/Apifetch'
import NavBar from './components/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Apifetch/>
        
      </div>
    )
  }
}
export default App
