import { Meta, StoryFn } from '@storybook/vue3';
import cButton from "../packages/components/cButton/cButton";
import cToast from "../packages/components/cToast/cToast";
import { ref, onMounted } from 'vue';

export default {
  title: "反馈组件/提示 cToast",
  component: cToast,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    msg: { control: "text", description: "提示信息"  },
    delay: { control: "number", description: "显示的时长，2000"  },
  },
} as Meta<typeof cToast>;

const Template: StoryFn<typeof cToast> = (args) => ({
  components: { cButton, cToast },
  setup() {
    const tRef = ref();
    onMounted(() => {
      tRef.value.open()
    });

    const click1 = () => {
      tRef.value.open()
    };
    return { args, tRef, click1 };
  },
  template: `
  <div>
    <cButton text="默认效果" @click="click1"/>
    <cToast v-bind="args" ref="tRef"/>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  msg: "提示信息",
  delay: 3000,
};
