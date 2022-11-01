import cMenu from "../packages/components/cMenu/demo.vue";
import { Meta, StoryFn } from '@storybook/vue3';
import cSpace from "../packages/components/cSpace/cSpace";

export default {
  title: "导航组件/菜单 cMenu",
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
  components: { cMenu, cSpace },
  setup() {
    return { args };
  },
  template: `
  <div>
    <cMenu />
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  
};
