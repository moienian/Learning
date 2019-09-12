import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AddTodo />
    <TodoList />
  </Provider>,
  root
);
