import cBar from "../packages/components/cBar/cBar";
import { Meta, StoryFn } from '@storybook/vue3';
import cSpace from "../packages/components/cSpace/cSpace";

export default {
  title: "进度组件/水平进度条 cBar",
  component: cBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    percent: {  },
    color: { control: "color" },
  },
} as Meta<typeof cBar>;

const Template: StoryFn<typeof cBar> = (args) => ({
  components: { cBar, cSpace },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cSpace />
    <c-bar v-bind="args" />
    <cSpace />
    <c-bar color="#f60" percent="50" />
    <cSpace />
    <c-bar color="#0094ff" percent="80" />
    <cSpace />
    <c-bar color="#ff0091" percent="100" />
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  percent: "30",
  color: "#f90",
};
