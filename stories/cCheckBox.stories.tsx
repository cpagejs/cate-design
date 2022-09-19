import cCheckBox from "../src/components/cCheckBox/cCheckBox";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/复选框 cCheckBox",
  component: cCheckBox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    modelValue: { control: "boolean", description: '值，true、false',  },
    disabled: { control: "boolean", description: '是否被禁止',  },
    halfChecked: { control: "boolean", description: '状态发生了改变', },
    onChange: {
      description: '状态发生了改变',
      action: 'onChange',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cCheckBox>;

const Template: StoryFn<typeof cCheckBox> = (args) => ({
  components: { cCheckBox },
  setup() {
    return { args };
  },
  template: '<cCheckBox v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  modelValue: true,
  disabled: true,
  halfChecked: true
};
