import visibilityFilter from "../../reducers/filters";

describe("test for filters reducer", () => {
  test("should handle initial state", () => {
    expect(visibilityFilter(undefined, { type: "@@INIT" })).toEqual(
      "SHOW_ALL",
      {
        type: "SET_VISIBILITY_FILTER"
      }
    );
  });
  test("should handle SHOW_ACTIVE filter", () => {
    expect(visibilityFilter("SHOW_ACTIVE", {})).toEqual("SHOW_ACTIVE", {
      type: "SET_VISIBILITY_FILTER"
    });
  });

  test("should handle SHOW_COMPLETED filter", () => {
    expect(visibilityFilter("SHOW_COMPLETED", {})).toEqual("SHOW_COMPLETED", {
      type: "SET_VISIBILITY_FILTER"
    });
  });
});
