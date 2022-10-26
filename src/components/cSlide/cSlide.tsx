/** 侧滑组件
 * @author 夏小宅
 */
import { defineComponent } from "vue";
import { loadingProps } from "./types";
import "./index.scss";

const props = loadingProps();
export default defineComponent({
  name: "cHeaderBack",
  props: props,
  emits: ["bgClick"],
  setup(props, ctx) {
    const hide = (e: Event) => {
      e.stopPropagation();
      ctx.emit("bgClick");
    };

    return () => {
      return (
        <>
          {props.isShow && (
            <section class="c-slide-container">
              <transition name="slide-fade">
                <div class="slide-inner">{ctx.slots.default?.()}</div>
              </transition>
              {props.showMask && <div class="slide-bg" onClick={hide}></div>}
            </section>
          )}
        </>
      );
    };
  },
});
