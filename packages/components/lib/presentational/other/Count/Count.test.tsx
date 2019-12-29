import React from "react";
import { shallow } from "enzyme";
import { Count } from ".";

describe("Count", () => {
  const props = {
    value: 10,
    onIncrement: () => undefined,
    onDecrement: () => undefined,
    set5: jest.fn
  };
  const spySet5 = jest.spyOn(props, "set5");
  const wrapper = shallow(<Count {...props} />);

  it("初期値", () => {
    const r = wrapper.find('[data-test="value"]');
    expect(r.text()).toBe(`カウント値：${props.value}`);
  });

  it("click", () => {
    const r = wrapper.find('[data-test="set5"]');
    r.simulate("click");
    expect(spySet5).toHaveBeenCalled();
  });
});
