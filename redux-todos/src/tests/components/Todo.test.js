import React from "react";
import { shallow } from "enzyme";
import Todo from "../../components/Todo";

describe("<Todo />", () => {
  test("should render <Todo /> correctly", () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper).toMatchSnapshot();
  });
});
