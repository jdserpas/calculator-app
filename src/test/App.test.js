import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App Component", ()=> {
  
  it("renders a Hello World header", ()=> {
    const {getByText} = render(<App />);
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  /**********Text boxes**************/
  it("renders 2 textboxes", ()=> {
    const {getByTestId} = render(<App />);
    
    expect(getByTestId("input-one")).toBeInTheDocument();
    expect(getByTestId("input-two")).toBeInTheDocument();
  });

  test("two text boxes in component default to 0", ()=> {
    const {getByTestId} = render(<App />);

    expect(getByTestId("input-one")).toHaveValue(0);
    expect(getByTestId("input-two")).toHaveValue(0);
  });

  test("text boxes values change", ()=> {
    const {getByTestId} = render(<App />);
    const component = getByTestId("input-one");
    const newVal = 3;

    fireEvent.change(component, {
      target: {
        value: newVal
      }
    });

    expect(component).toHaveValue(newVal);
  });
});