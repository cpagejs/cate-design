/**@author 夏小宅
* 倒计时效果
 */
import { defineComponent, ref, onMounted } from "vue";
import { timeOutProps } from "./types";
import "./index.scss";

const props = timeOutProps();
export default defineComponent({
  name: "cTimeOut",
  props,
  setup(props) {
    const timeData = ref({
      hour: '',
      minute: '',
      second: ''
    });

    const timer = ref<any>(null);
    
    const timeCount = (date) => {
      const now = new Date(),
        endDate = new Date(Date.parse(date)),
        leftTime = endDate.getTime() - now.getTime(),
        leftsecond = leftTime / 1000,
        day = Math.floor(leftsecond / (60 * 60 * 24)),
        _hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600),
        hour = _hour < 10 ? '0' + _hour : _hour,
        _minute = Math.floor((leftsecond - day * 24 * 60 * 60 - Number(hour) * 3600) / 60),
        minute = _minute < 10 ? '0' + _minute : _minute,
        _second = Math.floor(leftsecond - day * 24 * 60 * 60 - Number(hour) * 3600 - Number(minute) * 60),
        second = _second < 10 ? '0' + _second : _second;
      timeData.value = {
        hour: hour.toString(), 
        minute: minute.toString(),
        second: second.toString()
      }
    };

    onMounted(() => {
      clearInterval(timer);
      timer.value = setInterval(() => {
        if (Date.parse(props.date) < Date.parse((new Date()).toString())) {
          clearInterval(timer);
        } else {
          timeCount(props.date);
        }
      }, 1000);
    });

    return () => {
      return (
        <section class="c-time-count">
          <div>
            <span>{timeData.value.hour}时</span><em> : </em><span>{timeData.value.minute}分</span><em> : </em><span>{timeData.value.second}秒</span>
          </div>
        </section>
      );
    };
  },
});