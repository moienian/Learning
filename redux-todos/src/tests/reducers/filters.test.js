import visibilityFilter from "../../reducers/filters";

describe("test for filters reducer", () => {
  test("should handle initial state", () => {
    expect(visibilityFilter(undefined, {})).toEqual("SHOW_ALL", {});
  });

  test("should handle SHOW_ACTIVE filter", () => {
    expect(visibilityFilter("SHOW_ACTIVE", {})).toEqual("SHOW_ACTIVE");
  });

  test("should handle SHOW_COMPLETED filter", () => {
    expect(visibilityFilter("SHOW_COMPLETED", {})).toEqual("SHOW_COMPLETED");
  });
});
