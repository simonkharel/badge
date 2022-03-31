import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherCard from "./components/WeatherCard";
test("If city props is passeed, render the name", () => {
  render(<WeatherCard city="Denver" />);

  expect(screen.getByText(/Denver Weather/)).toBeInTheDocument();
});
