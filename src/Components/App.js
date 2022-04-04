import React, { Component} from "react";
import NumberInput from "./NumberInput";
import Selector from "./Selector";
import Total from "./Total";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTotal: 0,
    };
  }

  render() {
    const {currentTotal} = this.state;

    return(
      <div className="App" data-testid="app-containter">
        <h1>Hello, World!</h1>
        <NumberInput />
        <NumberInput />
        <Selector />
        <button 
          data-testid="calculate">
            Calculate
        </button>
        <Total total={currentTotal}/>
      </div>
    );
  }
}

export default App;