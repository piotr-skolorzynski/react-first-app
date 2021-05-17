import React, { Component } from 'react';
import AddNinja from './AddNinja';
import Ninjas from './ninjas';
import './index.css'

class App extends Component {
  state = {
    ninjas : [
      { name: 'Mateusz', age: 33, belt: 'black', id: 1 },
      { name:'Piotr', age: 39, belt: 'blue', id: 2 },
      { name: 'Magda', age: 20, belt: 'braun', id: 3 }
    ]
  }
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  //gives info if component is mounted
  componentDidMount() {
    console.log('component mounted');
  }
  //we can compare prev state with current state
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState);
  }
  render() {
    return(
      <div className="app">
        <h1>My first React app!</h1>
        <p>Hello and Welcome ;)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
