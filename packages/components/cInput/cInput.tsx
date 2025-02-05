import { computed, defineComponent } from "vue";
import { inputProps } from "./types";
import "./index.scss";

const props = inputProps();
export default defineComponent({
  name: "cInput",
  props: props,
  emits: ["update:modelValue", "change", "keydown"],
  setup(props, { emit, attrs }) {
    const classes = computed(() => {
      return {
        "c-input-wrapper": true,
        [`input-size-${props.size}`]: props.size,
        "is-disabled": props.disabled,
        "input-group": props.prepend || props.append,
        "input-group-append": !!props.append,
        "input-group-prepend": !!props.prepend,
      };
    });

    const handleChange = (e: Event) => {
      if ((e.target as HTMLInputElement).value !== props.modelValue) {
        emit("update:modelValue", (e.target as HTMLInputElement).value);
        emit("change", (e.target as HTMLInputElement).value);
      }
    };

    return () => {
      const { prepend, disabled, append, style, ...restProps } = props;

      return (
        <div
          style={style}
          className={classes.value}
        >
          {prepend && <div className="c-input-group-prepend">{prepend}</div>}
          <input
            {...restProps}
            {...attrs}
            value={props.modelValue}
            onInput={handleChange}
            className="c-input-inner"
            disabled={disabled}
          ></input>
          {append && <div className="c-input-group-append"> {append}</div>}
        </div>
      );
    };
  },
});
