import React from "react";
import { shallow } from "enzyme";
import Counter from "../components/Counter";

const setup = (value = 0) => {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  const component = shallow(<Counter value={value} {...actions} />);

  return {
    component,
    actions,
    buttons: component.find("button"),
    p: component.find("p")
  };
};

describe("Counter component", () => {
  it("should display count", () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^Clicked 0 times/);
  });

  it("first button should call onIncrement", () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate("click");
    expect(actions.onIncrement).toBeCalled();
  });

  it("second button should called onDecrement", () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate("click");
    expect(actions.onDecrement).toBeCalled();
  });

  it("third button should not call onIcrement if the counter is even", () => {
    const { buttons, actions } = setup(42);
    buttons.at(2).simulate("click");
    expect(actions.onIncrement).not.toBeCalled();
  });

  it("third button should call onIcrement if the counter is odd", () => {
    const { buttons, actions } = setup(42);
    buttons.at(2).simulate("click");
    expect(actions.onIncrement).not.toBeCalled();
  });

  it("third button should call onIcrement if the counter is odd and negative", () => {
    const { buttons, actions } = setup(-41);
    buttons.at(2).simulate("click");
    expect(actions.onIncrement).toBeCalled();
  });

  it("fourth button should call onIncrement in a second", done => {
    const { buttons, actions } = setup();
    buttons.at(3).simulate("click");
    setTimeout(() => {
      expect(actions.onIncrement).toBeCalled();
      done();
    }, 1000);
  });
});
