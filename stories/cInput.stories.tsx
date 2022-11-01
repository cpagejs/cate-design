import { ref } from "vue";
import cInput from "../packages/components/cInput/cInput";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "表单组件/输入框 cInput",
  component: cInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "lg"],
    },
    style: { control: "object", description: '自定义样式', },
  },
} as Meta<typeof cInput>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: StoryFn<typeof cInput> = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {cInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const inputValue = ref("123");

    return { inputValue, args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div><c-input v-bind="args">按钮</c-input></div>',
});

const Template2 = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { cInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const inputValue = ref("123");

    return { inputValue, args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div><c-input v-bind="args" v-model="inputValue">按钮</c-input> {{inputValue}} </div>',
});

export const Primary = Template.bind({});

(Primary as any).args = {
  placeholder: "placeholder",
  // style: "width: 200px",
  disabled: false,
};

export const PrependInput = Template.bind({});

(PrependInput as any).args = {
  placeholder: "placeholder",
  // style: "width: 200px",
  prepend: "https://",
  disabled: false,
};

export const AppendInput = Template.bind({});

(AppendInput as any).args = {
  placeholder: "placeholder",
  // style: "width: 200px",
  append: ".com",
  disabled: false,
};

export const ModelInput = Template2.bind({});

(ModelInput as any).args = {
  placeholder: "placeholder",
  // style: "width: 200px",
  disabled: false,
};
