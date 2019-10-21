import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GridItem from "./GridItem";

describe("GridItem", () => {
  test("It renders with the category text", () => {
    const props = { name: "test" };
    const { getByText } = render(<GridItem category={props} />);

    expect(getByText(/test/)).toBeInTheDocument();
  });
});
