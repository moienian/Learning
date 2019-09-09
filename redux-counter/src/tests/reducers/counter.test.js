import counter from "../../reducers/counter";

describe("Counter reducer", () => {
  test("should provide the intestial state", () => {
    expect(counter(undefined, {})).toBe(0);
  });

  test("should handle INCREMENT action", () => {
    expect(counter(1, { type: "INCREMENT" })).toBe(2);
  });

  test("should handle DECREMENT action", () => {
    expect(counter(1, { type: "DECREMENT" })).toBe(0);
  });

  test("should ignore unknown actions", () => {
    expect(counter(1, { type: "unknown" })).toBe(1);
  });
});
