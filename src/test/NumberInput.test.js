import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NumberInput from "../Components/NumberInput";

describe("NumberInput Component", () => {
  beforeEach(()=> {
    render(<NumberInput name="test-input"/>);
  });

  it("renders an input field", ()=> {
    const component = screen.getByTestId("input-field");
    expect(component).toBeInTheDocument();
  });
  it("has an initial value of 0", ()=> {
    const component = screen.getByTestId("input-field");
    expect(component).toHaveValue(0);
  });
  it("changes value after onChange event fires", ()=> {
    const component = screen.getByTestId("input-field");

    fireEvent.change(component, {
      target: {
        value: 3
      }
    });

    expect(component).toHaveValue(3);
  });
  it("only accepts number inputs", ()=> {
    const component = screen.getByTestId("input-field");

    fireEvent.change(component, {
      target: {
        value: "ayoo"
      }
    });

    expect(component).toHaveValue(0);
  });

  it("accepts an input value from props", ()=> {
    cleanup(); //remove previously created DOM
    const init = 7;
    //create new components with new initial value
    render(<NumberInput name="input-w-init" initialVal={init} />);
    const component = screen.getByTestId("input-field");

    expect(component).toHaveValue(init);
  });
});