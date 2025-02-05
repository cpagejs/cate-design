/** 侧滑组件
 * @author cpagejs
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
        <section
          className="c-drawer-container"
          v-show={props.isShow}
        >
          <div
            className={[
              "drawer-inner",
              {
                "drawer-inner_left": props.position === "left",
                "drawer-inner_right": props.position === "right",
              },
            ]}
          >
            {ctx.slots.default?.()}
          </div>
          {props.showMask && (
            <div
              className="drawer-mask"
              onClick={hide}
            ></div>
          )}
        </section>
      );
    };
  },
});
