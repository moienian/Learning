import React from "react";

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = React.useState(0);
//   return (
//
//   );
// };
class Accordion extends React.Component {
  state = { openIndexes: [] };
  setOpenIndex = openIndex => this.setState({ openIndexes: [openIndex] });
  render() {
    const { openIndexes } = this.state;
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <div key={item.title}>
              <button onClick={() => this.setOpenIndex(index)}>
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
