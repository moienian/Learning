import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked {value} times <button onClick={onIncrement}>+</button>{" "}
        <button onClick={onDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>Incerment if odd</button>{" "}
        <button>Increment async</button>
      </p>
    );
  }
}

export default Counter;
