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
    const {inputOne, inputTwo} = this.state;

    return(
      <div className="App">
        <h1>Hello, World!</h1>
        <input type="number" 
          value={inputOne}
          onChange={e => {
            this.setState({inputOne: e.target.value});
          }}
          data-testid="input-one" />
        <input type="number" 
          value={inputTwo} 
          data-testid="input-two" />
      </div>
    );
  }
}

export default App;