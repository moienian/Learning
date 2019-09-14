import todos from "../../reducers/todos";

describe("tests for todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todos([], {
        type: "ADD_TODO",
        text: "Todo one",
        id: 0
      })
    ).toEqual([
      {
        text: "Todo one",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos(
        [
          {
            text: "Todo one",
            completed: false,
            id: 0
          }
        ],
        {
          type: "ADD_TODO",
          text: "Todo two",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Todo one",
        completed: false,
        id: 0
      },
      {
        text: "Todo two",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todos(
        [
          {
            text: "Todo one",
            completed: false,
            id: 0
          },
          {
            text: "Todo two",
            completed: false,
            id: 1
          }
        ],
        {
          type: "ADD_TODO",
          text: "Todo three",
          id: 2
        }
      )
    ).toEqual([
      {
        text: "Todo one",
        completed: false,
        id: 0
      },
      {
        text: "Todo two",
        completed: false,
        id: 1
      },
      {
        text: "Todo three",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todos(
        [
          {
            text: "Todo one",
            completed: false,
            id: 0
          },
          {
            text: "Todo two",
            completed: false,
            id: 1
          },
          {
            text: "Todo three",
            completed: false,
            id: 2
          }
        ],
        {
          type: "TOGGLE_TODO",
          id: 1
        }
      )
    ).toEqual([
      {
        text: "Todo one",
        completed: false,
        id: 0
      },
      {
        text: "Todo two",
        completed: true,
        id: 1
      },
      {
        text: "Todo three",
        completed: false,
        id: 2
      }
    ]);
  });
});
