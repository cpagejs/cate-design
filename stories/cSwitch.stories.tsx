import cSwitch from "../src/components/cSwitch/cSwitch.vue";
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: "组件/开关 cSwitch",
  component: cSwitch,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { control: "color", description: "默认'#a0a0a0' 未选中时候颜色",  },
    activeColor: { control: "color", description: "默认'#448ff2' 选中时候颜色",  },
    checked: { control: "boolean", description: "默认false 是否选中", },
    onSwitch: {
      description: '状态发生了改变',
      action: 'onSwitch',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cSwitch>;

const Template: StoryFn<typeof cSwitch> = (args) => ({
  components: { cSwitch },
  setup() {
    const onSwitch = (msg) => {
      alert(msg)
    };
    return { args, onSwitch };
  },
  template: '<cSwitch v-bind="args" @onSwitch="onSwitch" />',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  checked: true
};
