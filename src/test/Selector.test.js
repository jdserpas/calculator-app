import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selector from "../Components/Selector";

describe("Selector compnent", ()=> {
  beforeEach(()=> {
    render(<Selector />);
  });

  it("renders a drop down", ()=> {
    const component = screen.getByTestId("drop-down");
    expect(component).toBeInTheDocument();
  });
  it("has an addition option", ()=> {
    const addOption = screen.getByDisplayValue("+");
    expect(addOption).toBeInTheDocument();
  });
});