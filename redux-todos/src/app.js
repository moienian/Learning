import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import store from "./store/configureStore";
import { addTodo } from "./actions/todos";

store.dispatch(addTodo("test"));

console.log(store.getState());

const root = document.getElementById("root");
ReactDOM.render(<TodoList />, root);
