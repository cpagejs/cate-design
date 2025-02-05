import cConfirm from "../packages/components/cConfirm/cConfirm.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref, onMounted } from "vue";
import cCard from "../packages/components/cCard/cCard";
import cButton from "../packages/components/cButton/cButton";

export default {
  title: "反馈组件/确认框 cConfirm",
  component: cConfirm,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    isShow: {
      control: "boolean",
    },
    type: { control: "number" },
    confirmText: {},
    cancelText: {},
  },
} as Meta<typeof cConfirm>;

const Template: StoryFn<typeof cConfirm> = (args) => ({
  components: { cCard, cButton, cConfirm },
  setup() {
    const myConfirm = ref(null);
    const isShow = ref(false);
    const isShow2 = ref(false);
    const ctype = ref(1);
    onMounted(() => {
      console.log(myConfirm.value);
    });

    const btnClick = () => {
      isShow.value = true;
      ctype.value = 1;
    };

    const close = () => {
      isShow.value = false;
    };

    const btnClick2 = () => {
      ctype.value = 2;
      isShow.value = true;
    };
    const close2 = () => {
      isShow.value = false;
    };

    return { args, btnClick, isShow, ctype, close, btnClick2, isShow2, close2 };
  },
  template: `
  <div>
    <cCard title="点击显示弹窗" @click="btnClick">
      <cButton text="点击显示弹窗-类型1" @click="btnClick"/>
      <p></p>
      <cButton text="点击显示弹窗-类型2" @click="btnClick2"/>
    </cCard>
    <cConfirm ref="myConfirm" v-bind="args" :type="ctype" :isShow="isShow" @cancel="close" @confirm="close">
      <template #header>
        title
      </template>  
      <template #inner>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
        <p>confirm info confirm info</p>
      </template>
    </cConfirm>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  isShow: false,
  type: 1,
  showMask: true,
  showBtn: true,
};
