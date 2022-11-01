import cSlide from "../packages/components/cSlide/cSlide";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import cButton from "../packages/components/cButton/cButton";

export default {
  title: "反馈组件/抽屉 cSlide",
  component: cSlide,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isShow: {
      control: 'boolean',
      description: "是否显示slide"
    },
    showMask: {
      control: 'boolean',
      description: "是否显示遮罩层"
    },
    onBgClick: {
      description: '背景区域被点击后触发',
      action: 'onBgClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cSlide>;

const Template: StoryFn<typeof cSlide> = (args) => ({
  components: { cSlide, cButton },
  setup() {
    const mySlide = ref(null);
    const isShow = ref(false);
    onMounted(() => {
      console.log(mySlide.value)
    });

    const btnClick = () => {
      isShow.value = true;
    };

    const close = () => {
      isShow.value = false;
    };

    return { args, isShow, btnClick, close };
  },
  template: `
  <div>
    <cButton text="显示slide" @click="btnClick"/>
    <cSlide v-bind="args" ref="mySlide" :isShow="isShow" @bgClick="close">slide content</cSlide>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  showMask: true
};
