import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

const AddTodo = props => {
  let input;
  const submitTodo = e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    props.dispatch(addTodo(input.value));
    input.value = "";
  };
  return (
    <form onSubmit={submitTodo}>
      <input type="text" ref={node => (input = node)} autoFocus required />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect()(AddTodo);
