/**@author cpagejs
 * toast
 */
import { defineComponent, ref, Transition } from "vue";
import "./index.scss";

export default defineComponent({
  name: "cToast",
  props: {
    msg: {
      // 提示信息
      type: String,
      default: "msg",
    },
    delay: {
      // 显示的时长
      type: Number,
      default: 2000,
    },
    onEnd: {
      type: Function,
    },
    showMask: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const isShow = ref(false);

    const open = () => {
      isShow.value = true;
      // setTimeout(() => {
      //   isShow.value = false;
      //   props.onEnd?.();
      // }, props.delay);
    };

    const close = () => {
      isShow.value = false;
    };

    ctx.expose({ open, close });
    return () => {
      return (
        <Transition name="c-toast">
          <div
            className="c-toast"
            v-show={isShow.value}
          >
            <div className="c-toast-msg">{props.msg}</div>
            <div
              className="c-toast-mask"
              v-show={props.showMask}
            ></div>
          </div>
        </Transition>
      );
    };
  },
});
