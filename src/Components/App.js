import React, { Component} from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: 0,
      inputTwo: 0,
    };
  }

  render() {
    return(
      <div className="App">
        <h1>Hello, World!</h1>
        <input type="number" 
          value={this.state.inputOne} 
          data-testid="input-one" />
        <input type="number" 
          value={this.state.inputTwo} 
          data-testid="input-two" />
      </div>
    );
  }
}

export default App;