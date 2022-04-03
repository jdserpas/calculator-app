import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NumberInput from "../Components/NumberInput";

describe("NumberInput Component", () => {
  it("renders an input field", ()=> {
    const {getByTestId} = render(<NumberInput />);
    expect(getByTestId("input-field")).toBeInTheDocument();
  });
  it("has an initial value of 0", ()=> {
    const {getByTestId} = render(<NumberInput />);
    expect(getByTestId("input-field")).toHaveValue(0);
  });
  it("changes value after onChange event fires", ()=> {
    const {getByTestId} = render(<NumberInput />);
    const component = getByTestId("input-field");

    fireEvent.change(component, {
      target: {
        value: 3
      }
    });

    expect(component).toHaveValue(3);
  });
});