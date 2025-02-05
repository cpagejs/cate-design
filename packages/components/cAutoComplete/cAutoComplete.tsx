import { defineComponent, ref, watch } from "vue";
import { AutoCompleteProps, DataSourceType } from "./type";
import cInput from "../cInput/cInput";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import classNames from "classnames";
import { useClickOutside } from "../../hooks/useClickOutside";

const props = AutoCompleteProps();

export default defineComponent({
  name: "AutoComplete",
  props: props,
  components: {
    cInput,
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    const suggestions = ref<DataSourceType[]>([]);
    const isLoading = ref(false);
    const inputModelValue = ref(props.modelValue);
    const highlightIndex = ref(-1);
    const componentRef = ref();
    const triggerSearch = ref(true);

    useClickOutside(componentRef, () => {
      suggestions.value = [];
    });

    const debounced = (fn: any, delay = 500) => {
      let timer: any = null;

      return (...args: any[]) => {
        if (timer) {
          clearInterval(timer);
        }
        timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, delay);
      };
    };

    watch(
      () => props.modelValue,
      debounced((newValue: any) => {
        if (triggerSearch.value) {
          console.log(triggerSearch.value);

          const res = props.fetchSuggestions!(newValue);

          if (res instanceof Promise) {
            isLoading.value = true;
            res.then((data) => {
              isLoading.value = false;
              suggestions.value = data;
            });
          } else {
            suggestions.value = res;
          }

          highlightIndex.value = -1;
        }
      }),
      { immediate: true }
    );

    const handleChange = (value: string) => {
      triggerSearch.value = true;
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };

    const handleSelect = (item: DataSourceType) => {
      triggerSearch.value = false;
      inputModelValue.value = item.value;
      suggestions.value = [];

      if (props.onSelect) {
        props.onSelect(item);
      }
    };

    const renderTemplate = (item: DataSourceType) => {
      return props.renderOption ? props.renderOption(item) : item.value;
    };

    const generateDropdown = () => {
      return (
        <ul className="c-suggestion-list">
          {suggestions.value.map((item, index) => {
            const cnames = classNames("suggestion-item", {
              "is-active": index === highlightIndex.value,
            });

            return (
              <li
                key={index}
                className={cnames}
                onClick={handleSelect.bind(null, item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      );
    };

    const highlight = (index: number) => {
      if (index < 0) index = 0;
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      highlightIndex.value = index;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.keyCode);

      switch (e.keyCode) {
        case 13:
          if (suggestions.value[highlightIndex.value]) {
            handleSelect(suggestions.value[highlightIndex.value]);
          }
          break;
        case 38:
          highlight(highlightIndex.value - 1);
          break;
        case 40:
          highlight(highlightIndex.value + 1);
          break;
        case 27:
          suggestions.value = [];
          break;
        default:
          break;
      }
    };

    return () => {
      const { onSelect, modelValue, style } = props;

      return (
        <div
          className="c-auto-complete"
          style={style}
          ref={componentRef}
        >
          <c-Input
            {...attrs}
            modelValue={inputModelValue.value}
            onChange={handleChange}
            onKeydown={handleKeyDown}
          ></c-Input>
          {isLoading.value && (
            <ul>
              <span className="iconfont icon-loading spinner"></span>
            </ul>
          )}
          {suggestions.value.length > 0 && generateDropdown()}
        </div>
      );
    };
  },
});
