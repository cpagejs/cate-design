import { defineComponent, h } from "vue";
import "./index.scss";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit("click");
    };

    return () => {
      return (
        <div
          className="c-card"
          onClick={handleClick}
        >
          <div className="c-card_title">{props?.title}</div>
          <div className="c-card_body">{ctx.slots?.default()}</div>
        </div>
      );
    };
  },
});
