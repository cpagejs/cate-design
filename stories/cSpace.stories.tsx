import { Meta, StoryFn } from '@storybook/vue3';
import cCard from "../packages/components/cCard/cCard";
import cSpace from "../packages/components/cSpace/cSpace";

export default {
  title: "基础组件/间距 cSpace",
  component: cSpace,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    height: { control: "text", description: "高度，默认20px"  },
    bgColor: { control: "color", description: "背景色，默认#fff"  },
    showLine: { control: "bool", description: "是否显示分割线，默认false"  },
  },
} as Meta<typeof cSpace>;

const Template: StoryFn<typeof cSpace> = (args) => ({
  components: { cCard, cSpace },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cCard title="间距，没有分割线">
      <cSpace v-bind="args"/>
    </cCard>
    <cCard title="间距，有分割线">
      <cSpace showLine/>
    </cCard>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  height: "20px",
  bgColor: "#dedede",
  showLine: false,
};
