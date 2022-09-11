import cBar from "../src/components/cBar/cBar";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "cate-design/cBar",
  component: cBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    percent: {  },
    color: { control: "color" },
  },
} as Meta<typeof cBar>;

const Template: StoryFn<typeof cBar> = (args) => ({
  components: { cBar },
  setup() {
    return { args };
  },
  template: '<c-bar v-bind="args" />',
});

export const Demo = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Demo.args = {
  percent: "30",
  color: "#f90",
};
