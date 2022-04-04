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
    this.click = this.click.bind(this);
  }

  click(){
    const num1 = parseInt(document.getElementById("input-1").value);
    const num2 = parseInt(document.getElementById("input-2").value);
    const operation = document.getElementById("default-selector").value;
    
    let result;

    switch(operation) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    default:
      result = 0;
    }

    this.setState({currentTotal: result});
  }

  render() {
    const {currentTotal} = this.state;

    return(
      <div className="App" data-testid="app-containter">
        <h1>Calculator</h1>
        <NumberInput name="input-1"/>
        <NumberInput name="input-2"/>
        <Selector name="default-selector"/>
        <button 
          data-testid="calculate"
          onClick={this.click}>
            Calculate
        </button>
        <Total total={currentTotal}/>
      </div>
    );
  }
}

export default App;