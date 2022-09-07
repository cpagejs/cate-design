import {
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  PropType,
  provide,
  ref,
} from "vue";
import "./index.scss";
import {
  cFormContext,
  FormItemContext,
  FormItemKey,
  FormKey,
  NewStringSchema,
  triggerType,
} from "./types";
import * as yup from "yup";

let id = 0;

function generateId(): string {
  return "form-item-" + id++;
}

export default defineComponent({
  name: "FormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
    rules: {
      type: [Object, Array] as PropType<NewStringSchema | NewStringSchema[]>,
    },
  },
  setup(props, { emit, slots }) {
    const errMsg = ref("");
    const currentId = generateId();
    const parent = inject<cFormContext>(FormKey);

    onMounted(() => {
      parent?.addItem({
        id: currentId,
        prop: props.prop,
        validate,
      });
    });
    // console.log(parent);

    onBeforeUnmount(() => {
      parent?.removeItem(currentId);
    });
    // form表单可以接受规则，formitem也可以，所以需判断获取谁的规则
    const getRules = (trigger?: triggerType): NewStringSchema[] => {
      const rules = props.rules || parent?.rules[props.prop];
      if (rules) {
        const ruleArr = Array.isArray(rules) ? rules : [rules];
        if (trigger) {
          const validateRules = ruleArr.filter(
            (rule) => rule.trigger === trigger
          );
          return validateRules;
        }
        return ruleArr;
      }
      return [];
    };

    const validate = (value: string, rules?: NewStringSchema[]): boolean => {
      // console.log(rules);
      const resRules = rules || getRules();
      resRules.forEach((rule) => {
        rule.validateFunc
          .validate(value)
          .then((valid: string | undefined) => {
            return true;
          })
          .catch((err: { errors: string }) => {
            errMsg.value = err.errors;
            return false;
          });
      });

      return true;
    };

    const handleInputChange = (value: string) => {
      const inputRules = getRules("input");
      validate(value, inputRules);
    };

    const handleInputBlur = (value: string) => {
      const blurRules = getRules("blur");
      validate(value, blurRules);
    };

    provide<Partial<FormItemContext>>(FormItemKey, {
      handleInputChange,
      handleInputBlur,
    });

    const renderLabel = () => {
      return slots.label ? (
        slots.label()
      ) : (
        <label class="item-label">{props.label}</label>
      );
    };

    return () => {
      return (
        <div class="c-form-item">
          {renderLabel()}
          {/* <label class="item-label">{props.label}：</label> */}
          <div class="item-content">
            <div class="item-control-wrap">{slots.default!()}</div>
            <p class="item-error" v-show={errMsg}>
              {errMsg.value}
            </p>
          </div>
        </div>
      );
    };
  },
});
