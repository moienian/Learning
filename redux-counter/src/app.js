import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers/index";

const store = createStore(counter);

const onIncrement = () => store.dispatch({ type: "INCREMENT" });
const onDecrement = () => store.dispatch({ type: "DECREMENT" });

const root = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Counter
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      value={store.getState()}
    />,
    root
  );

render();
store.subscribe(render);
