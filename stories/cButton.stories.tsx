import cButton from "../src/components/cButton/cButton";
import { action } from '@storybook/addon-actions';

export default {
  title: "组件/按钮 cButton",
  component: cButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
    type: {
      control: { type: "select" },
      options: ["primary", "info", "danger", "link"],
    },
    text: {
      control: { type: "text" },
    },
    onClick: {
      description: '点击事件',
      action: 'onClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { cButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<c-button @onClick="onClick" v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  disabled: false,
  text: "primary",
};

export const Info = Template.bind({});
Info.args = {
  disabled: false,
  text: "info 按钮",
  type: "info"
};

export const Danger = Template.bind({});
Danger.args = {
  disabled: false,
  text: "danger  按钮",
  type: "danger"
};

export const Link = Template.bind({});
Link.args = {
  text: "Link  按钮",
  type: "link",
  href: "www.baidu.com",
  disabled: false,
};
