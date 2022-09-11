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
  setup(props, ctx) {
    const showProcess = ref<Boolean>(true);
    const text = ref<String>("");
    const width0 = ref<Boolean>(true);
    const number = ref<any>(0);
    const clipAuto = ref<Boolean>(false);

    onMounted(() => {
      const percentdata = Number(props.percent);
      let percent = 0;

      if (percentdata >= 100) {
        showProcess.value = false;
        text.value = '100%';
      } else {
        var loading = setInterval(() => {
          if (percent >= percentdata) {
            clearInterval(loading);
            number.value = percentdata;
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
          {showProcess && <div class="c-circle-process">
            <div class={["circle", { "clip-auto": clipAuto }]}>
              <div class="percent left" style={{ "transform": 'rotate(' + (360 - (18 / 5) * number) + 'deg)' }}></div>
              <div class={["percent right", { "width0": width0 }]}></div>
            </div>
            <div class="num"><span>{number}</span>%</div>
          </div>}
          {!showProcess && <div class="c-circle-status">
            <div class="circle"></div>
            <div class="num">{text}</div>
          </div>}
        </div>
      );
    };
  },
})