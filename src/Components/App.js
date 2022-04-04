import React, { Component} from "react";
import NumberInput from "./NumberInput";
import Selector from "./Selector";
import Total from "./Total";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="App container" data-testid="app-containter">
        <h1>Calculator</h1>
        <div className="row justify-content-center gy-5">
          <NumberInput className="col-3" name="input-1"/>
        </div>
        <div className="row justify-content-center gy-5">
          <NumberInput className="col-3" name="input-2"/>
        </div>
        <div className="row">
          <Selector className="col-2" name="default-selector"/>
          <button 
            data-testid="calculate"
            onClick={this.click}
            className="btn btn-primary col-2">
              Calculate
          </button>
        </div>
        <Total total={currentTotal}/>
      </div>
    );
  }
}

export default App;