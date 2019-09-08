import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import store from "./store/configureStore";
import { incrementCount, decrementCount } from "./actions/index";

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
