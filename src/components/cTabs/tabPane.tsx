import { defineComponent, getCurrentInstance } from "vue";
import { tabPaneProps } from "./types";

const props = tabPaneProps();
export default defineComponent({
  name: "TabPane",
  props: props,
  setup(props, { emit, slots }) {
    const parentNode = getCurrentInstance()?.parent;

    return () => {
      return (
        <div class="pane" v-show={parentNode?.props.modelValue === props.name}>
          {slots.default!()}
        </div>
      );
    };
  },
});
