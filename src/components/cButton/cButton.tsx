import { defineComponent, reactive } from "vue";
import { buttonProps } from "./types";
import classNames from "classnames";
import "./index.scss";

const props = buttonProps();

export default defineComponent({
  name: "cButton",
  props: props,
  emits: ["onClick"],
  setup(props, { emit, slots, attrs }) {
    const classes = classNames("c-btn", {
      [`btn-${props.type}`]: props.type,
      [`btn-${props.size}`]: props.size,
      [`btn-disabled`]: props.disabled,
    });

    const styles = reactive({
      backgroundColor: props.backgroundColor,
      color: props.textColor,
    });

    const buttonClick = () => {
      emit("onClick");
    };

    return () => {
      const { href, text } = props;
      if (href) {
        return (
          <a href={href} class={classes} style={styles}>
            {text || ""}
          </a>
        );
      } else {
        return (
          <div class={classes} style={styles} onClick={buttonClick}>
            {text || ""}
          </div>
        );
      }
    };
  },
});
