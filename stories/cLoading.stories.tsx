import cLoading from "../src/components/cLoading/cLoading";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "cate-design/cLoading 加载组件",
  component: cLoading,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    styleLoading: {
      description: '自定义样式',
      control: "object"
     },
    color: { 
      description: '颜色',
      control: "color" 
    },
  },
} as Meta<typeof cLoading>;

const Template: StoryFn<typeof cLoading> = (args) => ({
  components: { cLoading },
  setup() {
    return { args };
  },
  template: '<c-loading v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  color: "#f90",
  styleLoading: {
    width: "40px",
    height: "40px"
  }
};
