import cInputPassword from "../packages/components/cInputPassword/cInputPassword.vue";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "表单组件/密码输入框 cInputPassword",
  component: cInputPassword,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    value: {  },
    label: { control: "text" },
    disabled: {
      control: "boolean",
    },
    showToggle: {
      control: "boolean",
    },
    length: {
      control: "number",
    },
    placeholder: {
      control: "text"
    }
  },
} as Meta<typeof cInputPassword>;

const Template: StoryFn<typeof cInputPassword> = (args) => ({
  components: { cInputPassword },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cInputPassword v-bind="args" />
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  value: "123456",
  label: "密码：",
  disabled: false,
  showToggle: true,
  length: 20,
  placeholder: "请输入密码"
};
