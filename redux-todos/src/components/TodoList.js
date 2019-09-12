import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

export default TodoList;
