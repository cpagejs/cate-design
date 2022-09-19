import cTimeCircle from "../src/components/cTimeCircle/cTimeCircle";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/圆环倒计时 cTimeCircle",
  component: cTimeCircle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    timer: { 
      control: "text",
      description: '倒计时时间,默认60',
     },
    showNum: {
      control: "boolean",
      description: '是否展示倒计时数字',
    }
  },
} as Meta<typeof cTimeCircle>;

const Template: StoryFn<typeof cTimeCircle> = (args) => ({
  components: { cTimeCircle },
  setup() {
    return { args };
  },
  template: '<cTimeCircle v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  timer: 10,
  showNum: false
};
