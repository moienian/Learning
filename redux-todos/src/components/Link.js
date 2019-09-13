import React from "react";

const Link = ({ active, children }) => (
  <button disabled={active}>{children}</button>
);

export default Link;
