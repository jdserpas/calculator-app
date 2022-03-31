import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", ()=> {
  it("renders a Hello World header", ()=> {
    const {getByText} = render(<App />);
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });
});