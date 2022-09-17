/** item组件
 * @author 夏小宅
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
        <div class="c-cell-item" onClick={onClickFn}>
          <div class="cell-left">
            {props.avatar && <img src={props.avatar} class="cell-left-icon" />}
            <div class="cell-left-info">
              <div class="cell-left-title">{props.title}</div>
              <div v-if="description" class="cell-left-desc">
                {props.description}
              </div>
            </div>
          </div>
          <div class="cell-right">
            <span class="right-text">{props.rightText}</span>
            {props.rightArrow && <em class="icon"></em>}
          </div>
        </div>
      );
    };
  },
});
