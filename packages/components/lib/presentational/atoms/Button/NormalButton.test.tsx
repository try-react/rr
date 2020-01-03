import React from "react";
import { shallow } from "enzyme";
import { NormalButton } from ".";

const props = {
  onClick: jest.fn
};

const spy = jest.spyOn(props, "onClick");
const wrapper = shallow(<NormalButton {...props}>aaa</NormalButton>);

it("click", () => {
  const r = wrapper.find('[data-test="foo"]');
  r.simulate("click");
  expect(spy).toHaveBeenCalled();
});
