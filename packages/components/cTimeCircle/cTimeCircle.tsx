/** 圆环倒计时组件
 * @author cpagejs
 */
import { defineComponent, ref, onMounted } from "vue";
import { timeCircleProps } from "./types";
import "./index.scss";

const props = timeCircleProps();
export default defineComponent({
  name: "cTimeCircle",
  props: props,
  emits: ["onEnd"],
  setup(props, ctx) {
    const clipAuto = ref(false);
    const wth0 = ref(true);
    const rotate = ref(0);
    const time = ref(props.timer);

    onMounted(() => {
      const loading = setInterval(() => {
        if (rotate.value >= 360) {
          clearInterval(loading);
          rotate.value = 360;
          ctx.emit("onEnd");
          return;
        } else if (rotate.value >= 180) {
          clipAuto.value = true;
          wth0.value = false;
        }
        rotate.value += 360 / props.timer;
        time.value--;
      }, 1000);
    });

    return () => {
      return (
        <div class="c-time-circle">
          <div class={["circle", { "clip-auto": clipAuto.value }]}>
            <div
              class="percent left"
              style={{ transform: "rotate(" + (360 - rotate.value) + "deg)" }}
            ></div>
            <div class={["percent right", { wth0: wth0.value }]}></div>
          </div>
          <div class="num">
            <span v-show={props.showNum}>{time.value}s</span>
          </div>
        </div>
      );
    };
  },
});
