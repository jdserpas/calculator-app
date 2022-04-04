import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Components/App";

describe("App Component", ()=> {
  
  it("renders a Hello World header", ()=> {
    const {getByText} = render(<App />);
    expect(getByText("Hello, World!")).toBeInTheDocument();
  });
  it("renders 2 textboxes", ()=> {
    const {getAllByTestId, getByTestId} = render(<App />);
    const Container = getByTestId("app-containter");
    const Child = getAllByTestId("input-field");
    
    expect(Container).toContainElement(Child[0]);
  });
  it("renders a total with a default value of 0", ()=> {
    const{getByTestId} = render(<App />);
    const containter = getByTestId("total");

    expect(containter).toBeInTheDocument();
    expect(containter).toHaveTextContent(0);
  });
  it("renders a button", ()=> {
    const{getByTestId} = render(<App />);
    const btn = getByTestId("calculate");

    expect(btn).toBeInTheDocument();
  });
});