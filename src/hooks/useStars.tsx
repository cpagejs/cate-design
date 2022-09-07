import { countBy } from "lodash";
import { Ref, ref } from "vue";

export function useStars(num: number, cb: () => void) {
  const starNum = ref(num);
  const setStarNum = (num: number) => {
    starNum.value = num;
    cb();
  };

  return { starNum, setStarNum };
}
