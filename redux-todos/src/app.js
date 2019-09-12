import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import VisibleTodoList from "./components/VisibleTodoList";
import AddTodo from "./components/AddTodo";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AddTodo />
    <VisibleTodoList />
  </Provider>,
  root
);
