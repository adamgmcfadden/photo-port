import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact for is rendering", () => {
  // First test
  it("renders", () => {
    render(<ContactForm />);
  });
  // Second test
  it("matches snapshot DOM doe structure", () => {
    //   render About
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });

  it("renders", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("buttontag")).toHaveTextContent("Submit");
  });
});
