import React from "react";
import { shallow } from "enzyme";
import { NormalButton } from ".";

const props = {
  onClick: jest.fn,
  txt: ""
};

const spy = jest.spyOn(props, "onClick");
const wrapper = shallow(<NormalButton {...props} />);

it("click", () => {
  const r = wrapper.find('[data-test="foo"]');
  r.simulate("click");
  expect(spy).toHaveBeenCalled();
});
