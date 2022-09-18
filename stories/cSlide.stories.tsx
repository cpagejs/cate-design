import cSlide from "../src/components/cSlide/cSlide";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, onMounted } from 'vue';

export default {
  title: "cate-design/cSlide 抽屉组件",
  component: cSlide,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    showMask: {
      control: 'boolean'
    },
    onBgClick: {
      description: '背景区域被点击后触发',
      action: 'onBgClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cSlide>;

const Template: StoryFn<typeof cSlide> = (args) => ({
  components: { cSlide },
  setup() {
    const mySlide = ref(null);

    onMounted(() => {
      console.log(mySlide)
    });

    return { args };
  },
  template: '<cSlide v-bind="args" ref="mySlide">slide content</cSlide>',
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  showMask: true
};
