import React, { Component} from "react";
import "./App.css";

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Hello, World!</h1>
        <input type="number" value="0" data-testid="input-one" />
        <input type="number" value="0" data-testid="input-two" />
      </div>
    );
  }
}

export default App;