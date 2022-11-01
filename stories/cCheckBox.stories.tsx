import cCheckBox from "../packages/components/cCheckBox/cCheckBox";
import { Meta, StoryFn } from '@storybook/vue3';
import { ref } from "vue";
import cSpace from "../packages/components/cSpace/cSpace";
import cCard from "../packages/components/cCard/cCard";

export default {
  title: "表单组件/复选框 cCheckBox",
  component: cCheckBox,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // modelValue: { control: "boolean", description: '绑定的字段',  },
    disabled: { control: "boolean", description: '是否被禁止',  },
    // halfChecked: { control: "boolean", description: '状态发生了改变', },
    bgColor: { control: "color", description: '背景颜色', },
    borderColor: { control: "color", description: '边框颜色', },
    round: { control: "boolean", description: '是否显示圆角', },
    onChange: {
      description: '状态发生了改变',
      action: 'onChange',
      table: {
        category: 'Events',
        type: Function
      }
    },
  },
} as Meta<typeof cCheckBox>;


const Template: StoryFn = (args) => ({
  components: { cCard, cCheckBox, cSpace },
  setup() {
    const check = ref(true);
    const check2 = ref(false);
    const check3 = ref(false);
    const bgColor = ref("#fff");
    return { args, check, check2, check3, bgColor };
  },
  template: `
  <div>
    <cCard title="方形选择框">
      <div><cCheckBox v-bind="args" v-model="check" bgColor="#f90" borderColor="#dedede"/>{{check}}</div>
      <div><cCheckBox v-bind="args" v-model="check2" borderColor="#dedede"/>{{check2}}</div>
      <div><cCheckBox v-bind="args" v-model="check3" bgColor="bgColor" borderColor="#dedede"/>{{check3}}</div>
    </cCard>
    <cSpace />
    <cCard title="圆形选择框">
      <div><cCheckBox v-bind="args" v-model="check" bgColor="#f60" round/></div>
      <div><cCheckBox v-bind="args" v-model="check" bgColor="green" round/></div>
    </cCard>
  </div>
  `,
});

export const 示例 = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
示例.args = {
  disabled: false,
  round: false,
  // halfChecked: true
};
