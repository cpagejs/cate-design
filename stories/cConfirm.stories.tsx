import cConfirm from "../src/components/cConfirm/cConfirm.vue";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import cButton from "../src/components/cButton/cButton";
import LayoutStory from "./LayoutStory";
import LayoutStoryItem from "./LayoutStoryItem";

export default {
  title: "组件/确认框 cConfirm",
  component: cConfirm,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isShow: {
      control: "boolean"
    },
    type: { control: "number" },
    confirmText: {  },
    cancelText: { },
  },
} as Meta<typeof cConfirm>;

const Template: StoryFn<typeof cConfirm> = (args) => ({
  components: { LayoutStory, LayoutStoryItem, cConfirm },
  setup() {
    const myConfirm = ref(null);
    const isShow = ref(false);
    const isShow2 = ref(false);
    onMounted(() => {
      console.log(myConfirm.value)
    });

    const btnClick = () => {
      isShow.value = true;
    };

    const close = () => {
      isShow.value = false;
    };

    const btnClick2 = () => {
      isShow2.value = true;
    };
    const close2 = () => {
      isShow2.value = false;
    };

    return { args, btnClick, isShow, close, btnClick2, isShow2, close2 };
  },
  template: `
  <LayoutStory>
    <LayoutStoryItem title="点击显示弹窗-类型1" @click="btnClick"></LayoutStoryItem>
    <LayoutStoryItem title="点击显示弹窗-类型2" @click="btnClick2"></LayoutStoryItem>
    <cConfirm ref="myConfirm" v-bind="args" :isShow="isShow" @cancel="close" @confirm="close">
      <template #inner>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
      </template>
    </cConfirm>
    <cConfirm :isShow="isShow2" @cancel="close2" @confirm="close2" type="2">
      <template #inner>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
      </template>
    </cConfirm>
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  isShow: true,
  type: 1
};

