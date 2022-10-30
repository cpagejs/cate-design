import classNames from "classnames";
import { cloneVNode, computed, defineComponent, provide, reactive, ref } from "vue";
import { ItemType, MenuContext, MenuKey, MenuProps } from "./types";
import "./index.scss";

const props = MenuProps();

export default defineComponent({
  name: "cMenu",
  props,
  setup(props, { emit, slots, attrs }) {
    const currentActive = ref<string>(props.defaultIndex);
    const handleClick = (index: string) => {
      currentActive.value = index;
      props.onSelect && props.onSelect(index);
    };

    const passedContext = ref({
      index: currentActive.value,
      onSelect: handleClick,
      type: props.type,
    });
    provide<MenuContext>(MenuKey, passedContext.value);
    provide("changeIndex", (index) => {
      console.log('changeIndex', index);
      passedContext.value.index = index;
    });

    const renderChildren = () => {
      return slots.default!().map((item, index) => {
        if (
          (item.type as ItemType).name === "cMenuItem" ||
          (item.type as ItemType).name === "cSubMenu"
        ) {
          return cloneVNode(item, { index: index.toString()});
        } else {
          console.error("Warning:Menu's child must be cMenuItem or cSubMenu");
        }
      });
    };

    return () => {
      const { type } = props;
      const classes = classNames("c-menu", {
        "menu-vertical": type === "vertical",
        "menu-horizontal": type !== "vertical",
      });

      return (
        <ul {...attrs} class={classes}>
          {renderChildren()}
        </ul>
      );
    };
  },
});
