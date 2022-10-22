import cLoading from "../src/components/cLoading/cLoading";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";
import LayoutStoryItem from "./LayoutStoryItem";

export default {
  title: "组件/加载 cLoading",
  component: cLoading,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    styleLoading: {
      description: '自定义样式',
      control: "object"
     },
    color: { 
      description: '颜色',
      control: "color" 
    },
    type: { 
      description: 'loading的类型，默认dot',
      control: "select",
      options: ["dot", "huan",],
    },
    huanLeftColor: { 
      description: '圆环类型loading左边颜色',
      control: "color" 
    },
    huanRightColor: { 
      description: '圆环类型loading右边颜色',
      control: "color" 
    },
  },
} as Meta<typeof cLoading>;

const Template: StoryFn<typeof cLoading> = (args) => ({
  components: { LayoutStory, LayoutStoryItem, cLoading },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <LayoutStoryItem title="圆点loading">
      <c-loading v-bind="args" />
    </LayoutStoryItem>
    <LayoutStoryItem title="圆环loading">
      <c-loading v-bind="args" type="huan" />
    </LayoutStoryItem>
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  color: "#f90",
  styleLoading: {
    width: "40px",
    height: "40px"
  },
  huanLeftColor: "#f90",
  huanRightColor: "#f60"
};
