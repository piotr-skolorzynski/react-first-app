import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  render() {
    return(
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello and Welcome ;)</p>
      <Ninjas name="Mateusz" age="33" belt="black"/>
      <Ninjas name="Piotr" age="39" belt="blue"/>
    </div>
    );
  }
}

export default App;
