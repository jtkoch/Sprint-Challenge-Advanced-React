import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Players from './components/Players';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(){
    super()
    this.state = {
      array: [{
        id: "",
        name: "test",
        country: "",
        searches: ""
      }]
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data)
        this.setState({array: res.data})
      })
    }

  render() {
    console.log(this.state.array)
    return(
      <div className="App">
        <Navbar />
        <div className="player-card">
          {this.state.array.map((info) => {
            return(
              <Players id={info.id} key={info.id} name={info.name} country={info.country} searches={info.searches} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;