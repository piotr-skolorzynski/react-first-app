import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  render() {
    return(
    <div className="App">
      <h1>My first React app!</h1>
      <p>Hello and Welcome ;)</p>
      <Ninjas />
    </div>
    );
  }
}

export default App;
