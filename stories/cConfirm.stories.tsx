import cConfirm from "../src/components/cConfirm/cConfirm.vue";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';

export default {
  title: "cate-design/cConfirm确认框组件",
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
  components: { cConfirm },
  setup() {
    const myConfirm = ref(null);

    onMounted(() => {
      console.log(myConfirm.value)
    });

    return { args };
  },
  template: `
  <cConfirm ref="myConfirm" v-bind="args">
    <template #inner>confirm info confirm info</template>
  </cConfirm>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  isShow: true,
};

export const 示例2 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例2.args = {
  isShow: false,
};

