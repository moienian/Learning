import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";

const App = () => {
  const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
  const footware = {
    title: "Favorite Footware",
    contents: "Flipflops are the best"
  };
  return <Accordion multiple items={[hats, footware]} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
