/** 侧滑组件
 * @author 夏小宅
 */
import { defineComponent, ref } from "vue";
import { loadingProps } from "./types";
import "./index.scss";

const props = loadingProps();
export default defineComponent({
  name: "cHeaderBack",
  props: props,
  emits: ["onBgClick"],
  setup(props, ctx) {
    const slideShow = ref(false);

    const hide = (e: Event) => {
      e.stopPropagation();
      ctx.emit("onBgClick");
    };

    return () => {
      return (
        <section class="c-slide-container">
          <transition name="slide-fade">
            {slideShow.value && (
              <div class="slide-inner">
                <slot></slot>
              </div>
            )}
          </transition>
          {slideShow.value && <div class="slide-bg" onClick={hide}></div>}
        </section>
      );
    };
  },
});
