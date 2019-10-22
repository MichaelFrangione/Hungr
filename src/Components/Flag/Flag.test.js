import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Flag from "./Flag";

describe("GridItem", () => {
  test("It renders with the category text", () => {
    const { getByTitle } = render(<Flag country="Canadian" />);

    expect(getByTitle(/Canadian/)).toBeInTheDocument();
  });
});
