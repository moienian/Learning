import React from "react";

class Accordion extends React.Component {
  state = { openIndexes: [] };
  addOpenIndex = index =>
    this.setState(state => {
      if (this.props.multiple) {
        return {
          openIndexes: [...state.openIndexes, index]
        };
      } else {
        return { openIndexes: [index] };
      }
    });
  render() {
    const { openIndexes } = this.state;
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <div key={item.title}>
              <button onClick={() => this.addOpenIndex(index)}>
                {item.title}
              </button>
              {openIndexes.includes(index) ? <div>{item.contents}</div> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Accordion;
