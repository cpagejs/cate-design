import cItem from "../src/components/cItem/cItem";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/item cItem",
  component: cItem,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    avatar: { control: "text", description: "左侧图标" },
    title: { control: "text", description: "左侧文案"  },
    description: { control: "text", description: "列表元素的描述内容"  },
    rightText: { control: "text", description: "右侧文案"  },
    rightArrowShow: { control: "boolean", description: "右侧是否显示箭头图标"  },
    onClick: {
      description: '点击事件',
      action: 'onClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cItem>;

const Template: StoryFn<typeof cItem> = (args) => ({
  components: { cItem },
  setup() {
    return { args };
  },
  template: '<cItem v-bind="args" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  title: "item组件",
  description: "description",
  rightArrow: true
};