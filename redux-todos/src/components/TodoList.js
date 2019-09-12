import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
    todos: state
  };
};
export default connect(mapStateToProps)(TodoList);
