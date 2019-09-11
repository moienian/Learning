import React from "react";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    todos: state
  };
};
export default connect(mapStateToProps)(TodoList);
