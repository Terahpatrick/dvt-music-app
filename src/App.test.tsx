import { render, screen } from "@testing-library/react";
import App from "./App";

test("Super Parent component render", () => {
  render(<App />);
  screen.debug();
});
