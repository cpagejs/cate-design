import cCircle from "../src/components/cCircle/cCircle";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/圆环进度 cCircle",
  component: cCircle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    percent: {
      name: 'percent',
      description: '进度',
      control: {
        type: 'text'
      }
    },
    // color: { control: "color" },
  },
} as Meta<typeof cCircle>;

const Template: StoryFn<typeof cCircle> = (args) => ({
  components: { cCircle },
  setup() {
    return { args };
  },
  template: '<c-circle v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  percent: "10",
  // color: "#f90",
};
