import cTimeCircle from "../packages/components/cTimeCircle/cTimeCircle";
import { Meta, StoryFn } from '@storybook/vue3';
import cCard from "../packages/components/cCard/cCard";

export default {
  title: "进度组件/圆环倒计时 cTimeCircle",
  component: cTimeCircle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    timer: { 
      control: "number",
      description: '倒计时时间,默认60',
     },
    showNum: {
      control: "boolean",
      description: '是否展示倒计时数字',
    }
  },
} as Meta<typeof cTimeCircle>;

const Template: StoryFn<typeof cTimeCircle> = (args) => ({
  components: { cCard, cTimeCircle },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cCard title="圆环倒计时">
      <cTimeCircle v-bind="args" />
    </cCard>
    <cCard title="圆环倒计时">
      <cTimeCircle timer="10" />
    </cCard>
    <cCard title="圆环倒计时:隐藏数字">
      <cTimeCircle timer="5" :showNum="false"/>
    </cCard>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  timer: 5,
  showNum: true
};
