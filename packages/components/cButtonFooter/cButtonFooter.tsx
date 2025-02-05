import { defineComponent, reactive } from "vue";
import { buttonFooterProps } from "./types";
import classNames from "classnames";
import "./index.scss";

const props = buttonFooterProps();

export default defineComponent({
  name: "cButtonFooter",
  props: props,
  emits: ["onClick"],
  setup(props, { emit }) {
    const classes = classNames("c-button-footer", {
      [`c-button-footer_disabled`]: props.disabled,
    });

    const styles = reactive({
      backgroundColor: props.disabled ? "#D0D0D0" : props.backgroungColor,
      color: props.textColor,
    });

    const btnClick = () => {
      emit("onClick");
    };

    return () => {
      return (
        <h1
          className={classes}
          style={styles}
          onClick={btnClick}
        >
          {props.text}
        </h1>
      );
    };
  },
});
