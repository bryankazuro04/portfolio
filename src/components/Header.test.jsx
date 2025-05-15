import { render, screen } from "@testing-library/react";
import HeaderNav from "./header/header-nav";

test("should viewing header navigation", () => {
  render(<HeaderNav />);
  expect(screen.getByText(/Bryan Kazuro/i)).toBeInTheDocument();
});
