import React from "react";
import { render } from "@testing-library/react";
import App2 from "../components/App2";

test("renders app component", () => {
  const { getByText } = render(<App2 />);
  const element = getByText(/Loading/i);
  expect(element).toBeInTheDocument();
});
