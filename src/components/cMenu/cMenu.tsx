import classNames from "classnames";
import { cloneVNode, defineComponent, provide, ref } from "vue";
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
      if (props.onSelect) {
        props.onSelect(index);
      }
    };

    const passedContext: MenuContext = {
      index: currentActive.value,
      onSelect: handleClick,
      mode: props.mode,
    };
    provide<MenuContext>(MenuKey, passedContext);

    const renderChildren = () => {
      return slots.default!().map((item, index) => {
        if (
          (item.type as ItemType).name === "MenuItem" ||
          (item.type as ItemType).name === "SubMenu"
        ) {
          // 拷贝一个节点
          return cloneVNode(item, { index: index.toString() });
        } else {
          console.error("Warning:Menu's child must be MenuItem or SubMenu");
        }
      });
    };

    return () => {
      const { mode, defaultIndex, onSelect } = props;
      const classes = classNames("c-menu", {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
      });

      return (
        <ul {...attrs} class={classes}>
          {/* {slots.default!()} */}
          {renderChildren()}
        </ul>
      );
    };
  },
});
