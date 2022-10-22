import cTimeCircle from "../src/components/cTimeCircle/cTimeCircle";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";
import LayoutStoryItem from "./LayoutStoryItem";

export default {
  title: "组件/圆环倒计时 cTimeCircle",
  component: cTimeCircle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    timer: { 
      control: "number",
      description: '倒计时时间,默认60',
     },
    showNum: {
      control: "boolean",
      description: '是否展示倒计时数字',
    }
  },
} as Meta<typeof cTimeCircle>;

const Template: StoryFn<typeof cTimeCircle> = (args) => ({
  components: { LayoutStory, LayoutStoryItem, cTimeCircle },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <LayoutStoryItem title="圆环倒计时">
      <cTimeCircle v-bind="args" />
    </LayoutStoryItem>
    <LayoutStoryItem title="圆环倒计时">
      <cTimeCircle timer="10" />
    </LayoutStoryItem>
    <LayoutStoryItem title="圆环倒计时:隐藏数字">
      <cTimeCircle timer="5" :showNum="false"/>
    </LayoutStoryItem>
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  timer: 5,
  showNum: true
};
