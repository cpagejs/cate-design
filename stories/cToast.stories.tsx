import { Meta, StoryFn } from '@storybook/vue3';
import cButton from "../packages/components/cButton/cButton";
import cToast from "../packages/components/cToast/cToast";
import { useToast } from "../packages/components/cToast/index";
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

    const click2 = () => {
      // import { useToast } from "cate-design";
      useToast({
        msg: "使用useToast方式显示消息",
        delay: 3000
      })
    };
    const click3 = () => {
      // import { useToast } from "cate-design";
      useToast({
        msg: "使用useToast方式显示消息",
        delay: 3000,
        showMask: true
      })
    };
    const click4 = () => {
      // import { useToast } from "cate-design";
      useToast({
        msg: "使用useToast方式显示消息",
        delay: 3000,
        onEnd() {
          alert("onEnd~")
        }
      })
    };
    return { args, tRef, click1, click2, click3, click4 };
  },
  template: `
  <div>
    <cButton text="默认效果" @click="click1"/>
    <p></p>
    <cButton text="使用useToast" @click="click2" type="info"/>
    <p></p>
    <cButton text="使用useToast,有遮罩层" @click="click3" type="danger"/>
    <p></p>
    <cButton text="使用useToast,回调函数" @click="click4"/>
    <cToast v-bind="args" ref="tRef"/>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  msg: "提示信息",
  delay: 3000,
  showMask: false,
};
