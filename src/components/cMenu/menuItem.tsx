import classNames from "classnames";
import { defineComponent, inject } from "vue";
import { MenuContext, MenuItemProps, MenuKey } from "./types";

const props = MenuItemProps();

const MenuItem = defineComponent({
  name: "MenuItem",
  props,
  setup(props, { emit, slots, attrs }) {
    const parentContext = inject<MenuContext>(MenuKey);

    return () => {
      const { index, disabled } = props;
      const handleClick = () => {
        if (parentContext?.onSelect && !disabled) {
          parentContext.onSelect(index!);
        }
      };

      const classes = classNames("menu-item", {
        "is-disabled": disabled,
        "is-active": parentContext?.index == index,
      });
      return (
        <li {...attrs} class={classes} onClick={handleClick}>
          {slots.default!()}
        </li>
      );
    };
  },
});

MenuItem.playName = "MenuItem";

export default MenuItem;
