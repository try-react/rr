import React from "react";
import { SimpleLabel } from ".";
import { shallow } from "enzyme";

const props = {
  value: 10
};

const wrapper = shallow(<SimpleLabel {...props} />);

it("初期値", () => {
  const r = wrapper.find('[data-test="value"]');
  expect(r.text()).toBe(`${props.value}`);
});
