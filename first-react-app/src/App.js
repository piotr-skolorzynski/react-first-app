import React, { Component } from 'react';
import AddNinja from './AddNinja';
import Ninjas from './ninjas';

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
  render() {
    return(
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello and Welcome ;)</p>
      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
    );
  }
}

export default App;
