import React, { Component} from "react";
import NumberInput from "./NumberInput";

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
      <div className="App" data-testid="app-containter">
        <h1>Hello, World!</h1>
        <NumberInput />
        <NumberInput />
      </div>
    );
  }
}

export default App;