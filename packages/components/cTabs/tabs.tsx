import { defineComponent, ref, watch } from "vue";
import "./index.scss";
import { tabsProps } from "./types";

const props = tabsProps();
export default defineComponent({
  name: "cTabs",
  props: props,
  emits: ["update:modelValue", "click"],
  setup(props, { emit, slots }) {
    const currentTabName = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newVal) => {
        currentTabName.value = newVal;
      }
    );

    const clickTab = (tabName: string) => {
      if (currentTabName.value !== tabName) {
        emit("update:modelValue", tabName);
        emit("click", tabName);
        currentTabName.value = tabName;
      }
    };

    const renderNavs = () => {
      return slots.default!().map((item, index) => {
        const extraCls =
          (item.props as any).name === currentTabName.value ? "active" : "";
        return (
          <div
            className={"c-tab-item " + extraCls}
            onClick={clickTab.bind(null, (item.props as any).name)}
          >
            {(item.children as any).title
              ? (item.children as any).title()
              : (item.props as any).name}
          </div>
        );
      });
    };

    return () => {
      return (
        <div className="c-tabs">
          <div className="navs">{renderNavs()}</div>
          {slots.default!()}
        </div>
      );
    };
  },
});
