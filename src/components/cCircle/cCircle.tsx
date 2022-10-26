/**
 * 圆环进度条组件
 */
import { defineComponent, ref, onMounted } from "vue";
import { circleProps } from "./types";
import "./index.scss";

const props = circleProps();

export default defineComponent({
  name: "cCircle",
  props: props,
  setup(props) {
    const showProcess = ref<boolean>(true);
    const numText = ref<string>("");
    const width0 = ref<boolean>(true);
    const number = ref<number>(0);
    const clipAuto = ref<boolean>(false);

    onMounted(() => {
      const percentdata = Number(props.percent);
      let percent = 0;

      if (percentdata >= 100) {
        showProcess.value = false;
        numText.value = "100%";
      } else {
        const loading = setInterval(() => {
          if (percent >= percentdata) {
            number.value = percentdata;
            clearInterval(loading);
          } else if (percent > 50) {
            clipAuto.value = true;
            width0.value = false;
          }
          number.value = percent;
          percent++;
        }, 50);
      }
    });

    return () => {
      return (
        <div class="c-circle">
          {showProcess.value && (
            <div class="c-circle-process">
              <div class={["circle", { "clip-auto": clipAuto }]}>
                <div
                  class="percent left"
                  style={{
                    transform:
                      "rotate(" +
                      (360 - (18 / 5) * Number(number.value)) +
                      "deg)",
                  }}
                ></div>
                <div class={["percent right", { width0: width0 }]}></div>
              </div>
              <div class="num">
                <span>{number.value}</span>%
              </div>
            </div>
          )}
          {!showProcess.value && (
            <div class="c-circle-status">
              <div class="circle"></div>
              <div class="num">{numText.value}</div>
            </div>
          )}
        </div>
      );
    };
  },
});
