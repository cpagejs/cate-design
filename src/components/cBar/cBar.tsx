import { defineComponent, ref, onMounted } from "vue";
import { barProps } from "./types";
import "./index.scss";

const props = barProps();
export default defineComponent({
  name: "cBar",
  props: props,
  setup(props) {
    const percentData = ref<string>("0%");

    onMounted(() => {
      percentData.value = "0%";
      setTimeout(() => {
        percentData.value =
          Number(props.percent) > 100 ? "100%" : Number(props.percent) + "%";
      }, 1000);
    });

    return () => {
      return (
        <div class="c-progress-bar">
          <span
            style={{ width: percentData.value, backgroundColor: props.color }}
          ></span>
          {/* <span>{props.percent+'%'}</span> */}
        </div>
      );
    };
  },
});
