import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App Component", ()=> {
  it("renders a Hello World header", ()=> {
    const {getByText} = render(<App />);
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders 2 textboxes", ()=> {
    const {getByTestId} = render(<App />);
    //const boxOne = getByTestId("input-one");
    //const boxTwo = getByTestId("input-two");

    expect(getByTestId("input-one")).toBeInTheDocument();
    expect(getByTestId("input-two")).toBeInTheDocument();
  });
});