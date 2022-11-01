import { Meta, StoryFn } from '@storybook/vue3';
import cCard from "../packages/components/cCard/cCard";

export default {
  title: "基础组件/卡片 cCard",
  component: cCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    title: { control: "text", description: "文案"  },
    onClick: {
      description: '点击事件',
      action: 'onClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cCard>;

const Template: StoryFn<typeof cCard> = (args) => ({
  components: { cCard },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cCard v-bind="args">
      <div>卡片内容</div>
    </cCard>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  title: "card组件",
};
