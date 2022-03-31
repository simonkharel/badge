import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StockCard from "./components/StockCard";

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<StockCard />);

  expect(queryByTestId("Ticker")).toBeTruthy();
  expect(queryByPlaceholderText("NIO")).toBeTruthy();
});
