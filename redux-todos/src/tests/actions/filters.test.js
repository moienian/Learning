import { setVisibilityFilter } from "../../actions/filters";

describe("test for filters action", () => {
  test("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    const action = setVisibilityFilter("active");
    expect(action).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });
});
