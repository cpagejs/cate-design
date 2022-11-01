import { computed, defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  props: {
    title: {
      type: String,
    }
  },
  emits: ["click"],
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit("click");
    };
    
    return () => {
      return (
        <div class="c-card" onClick={handleClick}>
          <div class="c-card_title">{props?.title}</div>
          <div class="c-card_body">{ctx.slots?.default?.()}</div>
        </div>
      )
    }
  },
});