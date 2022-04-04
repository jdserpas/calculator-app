import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selector from "../Components/Selector";

describe("Selector component", ()=> {
  beforeEach(()=> {
    render(<Selector name="test-selector"/>);
  });

  it("renders a drop down", ()=> {
    const component = screen.getByTestId("drop-down");
    expect(component).toBeInTheDocument();
  });
  it("has an addition and subtraction option", ()=> {
    const component = screen.getByTestId("drop-down");
    expect(component).toHaveValue("plus");
  });
  it("has a subtraction option", ()=> {
    const component = screen.getByTestId("drop-down");
    fireEvent.change(component, {
      target: {
        value: "minus"
      }
    });
    expect(component).toHaveValue("minus");
  });
});