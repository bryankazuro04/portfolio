import { render, screen } from "@testing-library/react";
import HeaderBar from "./header/HeaderBar";

test("should viewing header navigation", () => {
  render(<HeaderBar />);
  expect(screen.getByText(/Bryan Kazuro/i)).toBeInTheDocument();
});
