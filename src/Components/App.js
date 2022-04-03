import React, { Component} from "react";
import NumberInput from "./NumberInput";
import Selector from "./Selector";

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
        <Selector />
      </div>
    );
  }
}

export default App;