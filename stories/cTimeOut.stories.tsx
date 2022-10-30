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
     type: { 
      control: { type: "select" },
      options: [1, 2],
      description: '类型',
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
    <LayoutStoryItem title="普通倒计时,类型1">
      <cTimeOut v-bind="args" />
      <cTimeOut date="2023-10-26 23:15:26" textColor="#fff" bgColor="green" />
    </LayoutStoryItem>
    <LayoutStoryItem title="普通倒计时,类型2">
      <cTimeOut date="2023-10-26 23:15:26" textColor="#fff" bgColor="#f60" :type="2" />
    </LayoutStoryItem>
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  date: "2023-3-26 23:15:26",
  textColor: "#fff",
  bgColor: "#fd7e10"
};
