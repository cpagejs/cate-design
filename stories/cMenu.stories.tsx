import cMenu from "../src/components/cMenu/demo.vue";
import { Meta, StoryFn } from '@storybook/vue3';
import LayoutStory from "./LayoutStory";
import cSpace from "../src/components/cSpace/cSpace";

export default {
  title: "组件/菜单 cMenu",
  component: cMenu,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    defaultIndex: { 
      control: "text"
     },
     type: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: '菜单水平或者垂直',
     },
  },
} as Meta<typeof cMenu>;

const Template: StoryFn<typeof cMenu> = (args) => ({
  components: { LayoutStory, cMenu, cSpace },
  setup() {
    return { args };
  },
  template: `
  <LayoutStory>
    <cMenu />
  </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  
};
