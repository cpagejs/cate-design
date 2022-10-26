/**@author 夏小宅
 * 倒计时效果
 */
import { defineComponent, ref, onMounted, computed } from "vue";
import { timeOutProps } from "./types";
import "./index.scss";

const props = timeOutProps();
export default defineComponent({
  name: "cTimeOut",
  props,
  setup(props) {
    const timeData = ref({
      day: "",
      hour: "",
      minute: "",
      second: "",
    });

    const styles = computed(() => ({
      color: props.textColor,
      background: props.bgColor,
    }));

    const timer = ref<any>(null);

    const checkTime = (i) => {
      //将0-9的数字前面加上0，例1变为01
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    const leftTimer = (year, month, day, hour, minute, second) => {
      const a: any = new Date(year, month - 1, day, hour, minute, second);
      const b: any = new Date();
      const leftTime = a - b; //计算剩余的毫秒数
      const days = parseInt((leftTime / 1000 / 60 / 60 / 24).toString(), 10); //计算剩余的天数
      const hours = parseInt(((leftTime / 1000 / 60 / 60) % 24).toString(), 10); //计算剩余的小时
      let minutes = parseInt(((leftTime / 1000 / 60) % 60).toString(), 10); //计算剩余的分钟
      let seconds = parseInt(((leftTime / 1000) % 60).toString(), 10); //计算剩余的秒数

      minutes = checkTime(minutes);
      seconds = checkTime(seconds);

      timeData.value = {
        day: days.toString(),
        hour: hours.toString(),
        minute: minutes.toString(),
        second: seconds.toString(),
      };
    };

    onMounted(() => {
      clearInterval(timer);
      timer.value = setInterval(() => {
        if (Date.parse(props.date) < Date.parse(new Date().toString())) {
          clearInterval(timer);
        } else {
          const _timer = new Date(props.date);
          leftTimer(
            _timer.getFullYear(),
            _timer.getMonth() + 1,
            _timer.getDate(),
            _timer.getHours(),
            _timer.getMinutes(),
            _timer.getSeconds()
          );
        }
      }, 1000);
    });

    return () => {
      return (
        <section class="c-time-count">
          <div>
            <span style={styles.value}>{timeData.value.day}天</span>
            <em> : </em>
            <span style={styles.value}>{timeData.value.hour}时</span>
            <em> : </em>
            <span style={styles.value}>{timeData.value.minute}分</span>
            <em> : </em>
            <span style={styles.value}>{timeData.value.second}秒</span>
          </div>
        </section>
      );
    };
  },
});
