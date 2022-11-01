import { computed, defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  name: "cLayout",
  props: {
    height: {
      type: String,
      default: "20px"
    },
    showLine: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
  },
  setup(props, ctx) {
    return () => {
      const { height, bgColor } = props;
      const styles = computed(() => ({
        height,
        background: bgColor
      }));

      return (
        <div>
          {ctx.slots?.default!()}
        </div>
      );
    };
  },
});
