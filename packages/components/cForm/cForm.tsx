import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  PropType,
  provide,
} from "vue";
import {
  cFormContext,
  FormItemContext,
  FormKey,
  FormRules,
  ValidateFunc,
} from "../cFormItem/types";

export default defineComponent({
  name: "cForm",
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object as PropType<FormRules>,
  },
  setup(props, { emit, slots }) {
    const formItems: FormItemContext[] = [];

    const addItem = (item: FormItemContext) => {
      formItems.push(item);
    };

    const removeItem = (id: string) => {
      if (formItems.length) {
        const index = formItems.findIndex((item) => item.id == id);
        if (index > -1) {
          formItems.splice(index, 1);
        }
      }
    };
    provide<Partial<cFormContext>>(FormKey, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem,
    });

    const validate = (callback?: (valid: boolean) => void): boolean => {
      const res = formItems
        .filter((item) => item.prop)
        .every((item) => {
          return item.validate(props.model[item.prop]);
        });

      if (callback) {
        callback(res);
      }
      return true;
    };

    const instance: any = getCurrentInstance();
    Object.assign(instance?.proxy, {
      validate,
    });

    return () => {
      return <div className="c-form">{slots.default!()}</div>;
    };
  },
});
