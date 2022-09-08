import { defineComponent, ref, onMounted } from "vue";
import { barProps } from "./types";
import "./index.scss";

const props = barProps();
export default defineComponent({
  name: "cBar",
  props: props,
  setup(props){
    const percentData = ref<any>("0%");
    const color = props.color || "#f90";
    
    onMounted(() => {
      percentData.value = "0%";
      setTimeout(() => {
        percentData.value = props.percent + "%";
      }, 1000);
    });

    return () => {
      return (
        <div class="c-progress-bar">  
          <span style={{ width: percentData.value, backgroundColor: color }}></span>  
        </div>  
      );
    };
  }
});