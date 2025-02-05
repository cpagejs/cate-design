import { defineComponent, reactive } from "vue";
import { buttonProps } from "./types";
import classNames from "classnames";
import "./index.scss";

const props = buttonProps();

export default defineComponent({
  name: "cButton",
  props: props,
  emits: ["onClick"],
  setup(props, { emit }) {
    const classes = classNames("c-btn", {
      [`c-btn-${props.type}`]: props.type,
      [`c-btn-${props.size}`]: props.size,
      [`c-btn-disabled`]: props.disabled,
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
          <a
            href={href}
            className={classes}
            style={styles}
          >
            {text || ""}
          </a>
        );
      } else {
        return (
          <div
            className={classes}
            style={styles}
            onClick={buttonClick}
          >
            {text || ""}
          </div>
        );
      }
    };
  },
});
