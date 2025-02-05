/** 圆环倒计时组件
 * @author cpagejs
 */
import { defineComponent, ref, onMounted } from "vue";
import classNames from "classnames";
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
    const circle = classNames("circle", {
      "clip-auto": clipAuto.value,
    });
    const percentRight = classNames("percent right", { wth0: wth0.value });

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
        <div className="c-time-circle">
          <div className={circle}>
            <div
              className="percent left"
              style={{ transform: "rotate(" + (360 - rotate.value) + "deg)" }}
            ></div>
            <div className={percentRight}></div>
          </div>
          <div className="num">
            <span v-show={props.showNum}>{time.value}s</span>
          </div>
        </div>
      );
    };
  },
});
