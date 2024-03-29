import cButtonFooter from "../packages/components/cButtonFooter/cButtonFooter";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "基础组件/底部悬浮按钮 cButtonFooter",
  component: cButtonFooter,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    text: {  },
    textColor: { control: "color" },
    backgroungColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof cButtonFooter>;

const Template: StoryFn<typeof cButtonFooter> = (args) => ({
  components: { cButtonFooter },
  setup() {
    return { args };
  },
  template: '<cButtonFooter v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  text: "确认",
  disabled: false,
};
