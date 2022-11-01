import cDrawer from "../packages/components/cDrawer/cDrawer";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import cButton from "../packages/components/cButton/cButton";

export default {
  title: "反馈组件/抽屉 cDrawer",
  component: cDrawer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isShow: {
      control: 'boolean',
      description: "是否显示Drawer"
    },
    showMask: {
      control: 'boolean',
      description: "是否显示遮罩层"
    },
    position: {
      control: 'select',
      options: ["left", "right"],
      description: "抽屉的位置，左边还是右边，默认左边left"
    },
    onMaskClick: {
      description: '背景区域被点击后触发',
      action: 'onMaskClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cDrawer>;

const Template: StoryFn<typeof cDrawer> = (args) => ({
  components: { cDrawer, cButton },
  setup() {
    const mySlide = ref(null);
    const isShow = ref(false);
    onMounted(() => {
      console.log(mySlide.value)
    });

    const position = ref("left");

    const btnClick = () => {
      isShow.value = true;
      position.value = "left";
    };

    const close = () => {
      isShow.value = false;
    };

    const btnClick2 = () => {
      isShow.value = true;
      position.value = "right";
    };

    return { args, isShow, btnClick, close, position, btnClick2 };
  },
  template: `
  <div>
    <cButton text="显示cDrawer" @click="btnClick"/>
    <p></p>
    <cButton text="显示cDrawer-右侧" @click="btnClick2" type="info"/>
    <cDrawer v-bind="args" ref="mySlide" :isShow="isShow" :position="position" @maskClick="close">
      <h1>内容</h1>
    </cDrawer>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  isShow: false,
  showMask: true,
  position: "left"
};
