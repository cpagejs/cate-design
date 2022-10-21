import cBar from "../src/components/cBar/cBar";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";
import cSpace from "../src/components/cSpace/cSpace";

export default {
  title: "组件/水平进度条 cBar",
  component: cBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    percent: {  },
    color: { control: "color" },
  },
} as Meta<typeof cBar>;

const Template: StoryFn<typeof cBar> = (args) => ({
  components: { LayoutStory, cBar, cSpace },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <cSpace />
    <c-bar v-bind="args" />
    <cSpace />
    <c-bar color="#f60" percent="50" />
    <cSpace />
    <c-bar color="#0094ff" percent="80" />
    <cSpace />
    <c-bar color="#ff0091" percent="100" />
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  percent: "30",
  color: "#f90",
};
