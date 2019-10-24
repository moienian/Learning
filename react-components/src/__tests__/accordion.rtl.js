import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Accordion from "../components/Accordion";

test("can open accordion items to see the contents", () => {
  const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
  const footware = {
    title: "Favorite Footware",
    contents: "Flipflops are the best"
  };
  const { getByText, queryByText } = render(
    <Accordion multiple items={[hats, footware]} />
  );

  expect(getByText(hats.contents)).toBeInTheDocument();

  const foorwareButton = getByText(footware.title);
  const hatsButton = getByText(hats.title);

  fireEvent.click(foorwareButton);
  expect(getByText(footware.contents)).not.toBeNull();

  fireEvent.click(hatsButton);
  expect(getByText(hats.contents)).not.toBeNull();
});
