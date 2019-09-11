import uuid from "uuid";

export const addTodo = text => ({
  type: "ADD_TODO",
  id: uuid(),
  text
});
