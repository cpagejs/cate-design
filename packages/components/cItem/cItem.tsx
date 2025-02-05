/** item组件
 * @author cpagejs
 */
import { defineComponent } from "vue";
import { itemProps } from "./types";
import "./index.scss";

const props = itemProps();
export default defineComponent({
  name: "cItem",
  props: props,
  emits: ["onClick"],
  setup(props, ctx) {
    const onClickFn = () => {
      ctx.emit("onClick");
    };

    return () => {
      return (
        <div
          className="c-cell-item"
          onClick={onClickFn}
        >
          <div className="cell-left">
            {props.avatar && (
              <img
                src={props.avatar}
                className="cell-left-icon"
              />
            )}
            <div className="cell-left-info">
              <div className="cell-left-title">{props.title}</div>
              {props.description && (
                <div className="cell-left-desc">{props.description}</div>
              )}
            </div>
          </div>
          <div className="cell-right">
            <span className="right-text">{props.rightText}</span>
            {props.rightArrowShow && <em className="icon"></em>}
          </div>
        </div>
      );
    };
  },
});
