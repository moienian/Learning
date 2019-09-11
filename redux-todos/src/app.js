import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import store from "./store/configureStore";
import { addTodo } from "./actions/todos";
import AddTodo from "./components/AddTodo";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AddTodo />
    <TodoList />
  </Provider>,
  root
);
