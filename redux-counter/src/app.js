import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers/index";

const store = createStore(counter);

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const onIncrement = () => store.dispatch(incrementCount());
const onDecrement = () => store.dispatch(decrementCount());

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
