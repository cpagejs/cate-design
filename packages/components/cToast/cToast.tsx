/**@author 夏小宅
 * 倒计时效果
 */
 import { defineComponent, ref, onMounted, computed, Transition } from "vue";
 import "./index.scss";

 export default defineComponent({
  name: "cToast",
  setup(props, ctx) {
    
    return () => {
      return (
        <div class="c-toast">
          <transition name="c-toast">
            
          </transition>
        </div>
      );
    };
  },
 });