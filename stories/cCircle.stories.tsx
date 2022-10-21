import cCircle from "../src/components/cCircle/cCircle";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";

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
  components: { LayoutStory, cCircle },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <c-circle v-bind="args" />
    <c-circle percent="50" />
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  percent: "10",
  // color: "#f90",
};
