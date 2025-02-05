import { computed, defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  name: "cSpace",
  props: {
    height: {
      type: String,
      default: "20px",
    },
    showLine: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
  },
  setup(props, ctx) {
    return () => {
      const { height, bgColor, showLine } = props;
      const styles = computed(() => ({
        height,
        background: bgColor,
      }));

      return (
        <div
          className="c-space"
          style={styles.value}
        >
          {showLine && <div className="c-space_line"></div>}
        </div>
      );
    };
  },
});
