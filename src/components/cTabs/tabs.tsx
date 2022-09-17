import { defineComponent, ref, watch } from "vue";
import "./index.scss";
import { tabsProps } from "./types";

const props = tabsProps();
export default defineComponent({
  name: "cTabs",
  props: props,
  emits: ["update:modelValue"],
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
      }
    };

    const renderNavs = () => {
      return slots.default!().map((pane, index) => {
        const extraCls =
          (pane.props as any).name === currentTabName.value ? "active" : "";
        return (
          <div
            class={"c-tab-pane " + extraCls}
            onClick={clickTab.bind(null, (pane.props as any).name)}
          >
            {(pane.children as any).title
              ? (pane.children as any).title()
              : (pane.props as any).name}
          </div>
        );
      });
    };
    return () => {
      return (
        <div class="c-tabs">
          <div class="navs">{renderNavs()}</div>
          {slots.default!()}
        </div>
      );
    };
  },
});
