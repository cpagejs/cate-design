import cTimeOut from "../src/components/cTimeOut/cTimeOut";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";
import LayoutStoryItem from "./LayoutStoryItem";

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
  components: { LayoutStory, LayoutStoryItem, cTimeOut },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <cTimeOut v-bind="args" />
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  date: "2022-10-16 10:15:26"
};
