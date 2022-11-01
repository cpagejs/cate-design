import cCircle from "../packages/components/cCircle/cCircle";
import { Meta, StoryFn } from '@storybook/vue3';
import cCard from "../packages/components/cCard/cCard";

export default {
  title: "进度组件/圆环进度 cCircle",
  component: cCircle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    percent: {
      name: 'percent',
      description: '进度',
      control: {
        type: 'text'
      }
    },
    // color: { control: "color" },
  },
} as Meta<typeof cCircle>;

const Template: StoryFn<typeof cCircle> = (args) => ({
  components: { cCard, cCircle },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cCard title="圆环进度">
      <c-circle v-bind="args" />
    </cCard>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  percent: "10",
  // color: "#f90",
};
