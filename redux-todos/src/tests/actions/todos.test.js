import * as todos from "../../actions/todos";

describe("tests for todos action", () => {
  test("addTodo should create ADD_TODO action", () => {
    const action = todos.addTodo("Use redux");
    expect(action).toEqual({
      type: "ADD_TODO",
      id: expect.any(String),
      text: "Use redux"
    });
  });

  test("toggleTodo should create TOGGLE_TODO action", () => {
    const action = todos.toggleTodo("abc123");
    expect(action).toEqual({
      type: "TOGGLE_TODO",
      id: "abc123"
    });
  });
});
