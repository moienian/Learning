import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

describe("test for Footer", () => {
  test("should render <Footer /> correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
