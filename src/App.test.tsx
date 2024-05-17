import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("should show name field", () => {
    render(<App />);

    const input = screen.getByLabelText("Name");
    expect(input).toBeInTheDocument();
  });
});
