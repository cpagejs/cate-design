import cTabs from "../src/components/cTabs/tabs";
import cTabItem from "../src/components/cTabs/tabItem"
import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from "vue";
import LayoutStory from "./LayoutStory";
import LayoutStoryItem from "./LayoutStoryItem";

export default {
  title: "组件/标签页 cTabs",
  component: cTabs,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    modelValue: { 
      control: "text"
    },
    onClick: {
      description: 'tab被点击后触发',
      action: 'onClick',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cTabs>;

const Template: StoryFn<typeof cTabs> = (args) => ({
  components: { LayoutStory, LayoutStoryItem, cTabs, cTabItem },
  setup() {
    const currentTabName = ref("Vue");
    const onClick = (txt) => {
      console.log(txt)
    };
    return { args, currentTabName, onClick };
  },
  template: `
    <LayoutStory>
      <LayoutStoryItem title="普通tab">
        <c-tabs v-model="currentTabName" @onClick="onClick">
          <c-tab-item name="React">
            react todo
          </c-tab-item>
          <c-tab-item name="Vue">vue todo</c-tab-item>
          <c-tab-item name="Cpage">cpage todo</c-tab-item>
        </c-tabs>
      </LayoutStoryItem>
      <LayoutStoryItem title="自定义tab的title">
        <c-tabs v-model="currentTabName" @onClick="onClick">
          <c-tab-item name="React">
            <template #title>
              <b style="color: red">自定义</b>
            </template>
            react todo
          </c-tab-item>
          <c-tab-item name="Vue">vue todo</c-tab-item>
          <c-tab-item name="Cpage">cpage todo</c-tab-item>
        </c-tabs>
      </LayoutStoryItem>
    </LayoutStory>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  modelValue: "Vue"
};
