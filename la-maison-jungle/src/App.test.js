import { render, screen } from "@testing-library/react";
import Banner from ".Component/Banner";

test("renders learn react link", () => {
  render(<Banner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});