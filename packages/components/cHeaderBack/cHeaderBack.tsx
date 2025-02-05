/** 导航条--返回
 * @author cpagejs
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
        <header className="c-header-back">
          <i
            className="icon_left"
            onClick={handleClickBack}
          ></i>
          <div className="ellipsis">{props.title}</div>
        </header>
      );
    };
  },
});
