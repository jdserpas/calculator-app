import React, { Component} from "react";
import NumberInput from "./NumberInput";
import Selector from "./Selector";
import Total from "./Total";

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
        <Total total="0"/>
      </div>
    );
  }
}

export default App;