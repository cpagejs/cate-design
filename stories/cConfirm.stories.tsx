import cConfirm from "../src/components/cConfirm/cConfirm.vue";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';
import cButton from "../src/components/cButton/cButton";
import LayoutStory from "./LayoutStory";

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
  components: { LayoutStory, cConfirm, cButton },
  setup() {
    const myConfirm = ref(null);
    const isShow = ref(false);
    onMounted(() => {
      console.log(myConfirm.value)
    });

    const btnClick = () => {
      isShow.value = true;
    };

    const close = () => {
      isShow.value = false;
    };

    return { args, btnClick, isShow, close };
  },
  template: `
  <LayoutStory>
    <cButton text="显示弹窗-类型1" @click="btnClick"/>
    <cConfirm ref="myConfirm" v-bind="args" :isShow="isShow" @cancel="close" @confirm="close">
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

