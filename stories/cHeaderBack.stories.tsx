import cHeaderBack from "../packages/components/cHeaderBack/cHeaderBack";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "导航组件/顶部导航 cHeaderBack",
  component: cHeaderBack,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: {  },
    onBack: {
      name: 'onBack',
      description: '返回按钮点击事件',
      action: 'onBack',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cHeaderBack>;

const Template: StoryFn<typeof cHeaderBack> = (args) => ({
  components: { cHeaderBack },
  setup() {
    return { args };
  },
  template: '<div><c-header-back @onBack="onBack" v-bind="args" /></div>',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  title: "标题",
};
