import React from "react";
import { render } from "@testing-library/react";
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
});