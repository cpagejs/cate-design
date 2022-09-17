/** 导航条--返回
 * @author 夏小宅
 */
import { defineComponent } from "vue";
import { headerBackProps } from "./types";
import "./index.scss";

const props = headerBackProps();
export default defineComponent({
  name: "cHeaderBack",
  props: props,
  emits: ["onBack"],
  setup(props, ctx) {
    const handleClickBack = () => {
      ctx.emit("onBack");
    };

    return () => {
      return (
        <header class="c-header-back">
          <i onClick={handleClickBack}></i>
          <p class="ellipsis">{props.title}</p>
        </header>
      );
    };
  },
});
