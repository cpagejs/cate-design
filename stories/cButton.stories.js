import cButton from "../src/components/cButton/cButton";

export default {
  title: "Example/Button",
  component: cButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
    btnType: {
      control: { type: "select" },
      options: ["primary", "default", "danger", "link"],
    },
    label: {},
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
  template: '<c-Button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  disabled: false,
  label: "Primary",
};

export const Link = Template.bind({});
Link.args = {
  label: "Link",
  btnType: "link",
  href: "www.baidu.com",
  disabled: false,
};
