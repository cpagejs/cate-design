import classNames from "classnames";
import { defineComponent, inject } from "vue";
import { MenuContext, MenuItemProps, MenuKey } from "./types";

const props = MenuItemProps();

const MenuItem = defineComponent({
  name: "cMenuItem",
  props,
  setup(props, { emit, slots, attrs }) {
    const parentContext = inject<MenuContext>(MenuKey);
    const changeIndex = inject<any>("changeIndex");
    
    
    return () => {
      const { index, disabled } = props;
      const handleClick = () => {
        if (!disabled) {
          changeIndex(index);
          parentContext?.onSelect && parentContext.onSelect(index!);
        }
      };
      
      return (
        <li {...attrs} class={["menu-item", {
          "is-disabled": disabled,
          "is-active": parentContext?.index == index,
        }]} onClick={handleClick}>
          {slots.default!()}
        </li>
      );
    };
  },
});

MenuItem.playName = "cMenuItem";

export default MenuItem;
