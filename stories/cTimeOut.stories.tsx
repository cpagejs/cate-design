import cTimeOut from "../src/components/cTimeOut/cTimeOut";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/时分秒倒计时 cTimeOut",
  component: cTimeOut,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    date: { 
      control: "text",
      description: '倒计时时间',
     },
  },
} as Meta<typeof cTimeOut>;

const Template: StoryFn<typeof cTimeOut> = (args) => ({
  components: { cTimeOut },
  setup() {
    return { args };
  },
  template: '<cTimeOut v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  date: "2022-10-16 10:15:26"
};
