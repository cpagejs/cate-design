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
     textColor: { 
      control: "color",
      description: '文字颜色',
     },
     bgColor: { 
      control: "color",
      description: '背景颜色',
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
    <LayoutStoryItem title="普通倒计时">
      <cTimeOut v-bind="args" />
      <cTimeOut date="2023-10-26 23:15:26" textColor="#000" bgColor="green" />
    </LayoutStoryItem>
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  date: "2022-10-26 23:15:26",
  textColor: "#fff",
  bgColor: "#fd7e10"
};
