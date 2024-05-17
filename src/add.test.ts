import { describe, expect, it } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);

    expect(add(10, 20)).toBe(30);

    expect(add(0.1, 0.4)).toBe(0.5);
  });
});
