import {
  shallowMount
} from "@vue/test-utils";
import New from "@/components/New.vue";

let propsDataForNew = {
  sub1: "hello",
  sub2: "goodbye"
};

describe("New.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(New, {
      propsData: {
        prop1: propsDataForNew
      }
    });
  });
  it("It changes data when prop object changes", () => {
    expect(wrapper.vm.someData).toBe("hello");
    propsDataForNew.sub1 = "test2";
    wrapper.setProps({
      prop1: propsDataForNew
    });
    expect(wrapper.vm.someData).toBe("test2");
  });
});