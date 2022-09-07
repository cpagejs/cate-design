import { defineComponent } from "vue";
import { buttonProps } from "./types";
import classNames from "classnames";
import "./index.scss";

const props = buttonProps();

export default defineComponent({
  name: "cButton",
  props: props,
  setup(props, { emit, slots, attrs }) {
    const classes = classNames("c-btn", {
      [`btn-${props.type}`]: props.type,
      [`btn-${props.size}`]: props.size,
      disabled: props.disabled,
    });

    const styles = {
      backgroundColor: props.backgroundColor,
    };

    return () => {
      const { href, disabled, label } = props;
      if (href) {
        return (
          <a {...attrs} href={href} class={classes} style={styles}>
            {label}
          </a>
        );
      } else {
        return (
          <button {...attrs} class={classes} disabled={disabled} style={styles}>
            {label}
          </button>
        );
      }
    };
  },
});
