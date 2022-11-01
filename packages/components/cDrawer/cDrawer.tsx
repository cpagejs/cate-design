/** 侧滑组件
 * @author 夏小宅
 */
import { defineComponent } from "vue";
import { loadingProps } from "./types";
import "./index.scss";

const props = loadingProps();
export default defineComponent({
  name: "cDrawer",
  props: props,
  emits: ["maskClick"],
  setup(props, ctx) {
    const hide = (e: Event) => {
      e.stopPropagation();
      ctx.emit("maskClick");
    };

    return () => {
      return (
        <section class="c-drawer-container" v-show={props.isShow}>
          <div
            class={["drawer-inner", { "drawer-inner_left": props.position === 'left', "drawer-inner_right": props.position === 'right' }]}
          >
            {ctx.slots.default?.()}
          </div>
          {props.showMask && <div class="drawer-mask" onClick={hide}></div>}
        </section>
      );
    };
  },
});
