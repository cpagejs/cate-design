import { defineComponent, getCurrentInstance } from "vue";
import { tabPaneProps } from "./types";

const props = tabPaneProps();
export default defineComponent({
  name: "cTabItem",
  props: props,
  setup(props, { emit, slots }) {
    return () => {
      const parentNode = getCurrentInstance()?.parent;
      const show = parentNode?.props?.modelValue === props.name;

      return (
        <div class="pane" v-show={show}>
          {slots.default!()}
        </div>
      );
    };
  },
});
