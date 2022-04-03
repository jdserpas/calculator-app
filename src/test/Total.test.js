import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Total from "../Total";

describe("Total component rendering", ()=> {
  it("displays given props", () => {
    const inputVal = "dummy";
    const { getByTestId } = render(<Total total={inputVal}/>);
    const component = getByTestId("total");
    expect(component.textContent).toEqual(inputVal);
  });
});