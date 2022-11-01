/**@author 夏小宅
 * 倒计时效果
 */
 import { defineComponent, ref, Transition, computed } from "vue";
 import "./index.scss";

 export default defineComponent({
  name: "cToast",
  props: {
    msg: { // 提示信息
      type: String,
      default: "msg"
    },
    delay: { // 显示的时长
      type: Number,
      default: 2000
    },
  },
  // exposes: ["open", "close"],
  setup(props, ctx) {
    const isShow = ref(false);

    const open = () => {
      isShow.value = true;
      setTimeout(() => {
        isShow.value = false;
      }, props.delay);
    };

    const close = () => {
      isShow.value = false;
    };

    ctx.expose({open, close});
    return () => {
      return (
        <div class="c-toast">
          <Transition name="c-toast">
            <div class="c-toast-inner" v-show={isShow.value}>
              <div class="c-toast_msg">{props.msg}</div>
            </div>
          </Transition>
        </div>
      );
    };
  },
 });