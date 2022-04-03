import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Total from "../Components/Total";

describe("Total component rendering", ()=> {
  it("displays given props", () => {
    const inputVal = 3;
    const { getByTestId } = render(<Total total={inputVal}/>);
    const component = getByTestId("total");
    expect(parseInt(component.textContent)).toBe(inputVal);
  });
});