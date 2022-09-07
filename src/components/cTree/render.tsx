import { defineComponent } from "vue";
import { renderNodeProps } from "./types";

const props = renderNodeProps();
export default defineComponent({
  name: "RenderNode",
  props: props,
  setup(props, { emit }) {
    return () => {
      return props.render!(props.node!);
    };
  },
});
