import cCheckBox from "../src/components/cCheckBox/cCheckBox";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from "vue";

export default {
  title: "表单组件/复选框 cCheckBox",
  component: cCheckBox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // modelValue: { control: "boolean", description: '绑定的字段',  },
    disabled: { control: "boolean", description: '是否被禁止',  },
    // halfChecked: { control: "boolean", description: '状态发生了改变', },
    bgColor: { control: "color", description: '背景颜色', },
    borderColor: { control: "color", description: '边框颜色', },
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
    const check = ref(true);
    const check2 = ref(false);
    const bgColor = ref("#fff");
    return { args, check, check2, bgColor };
  },
  template: `
  <cCheckBox v-bind="args" v-model="check" />
  <div>{{check}}</div>
  <cCheckBox v-bind="args" v-model="check2" />
  <div><cCheckBox v-bind="args" v-model="check2" bgColor="bgColor"/><div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  disabled: false,
  // halfChecked: true
};
