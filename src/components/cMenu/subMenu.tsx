import classNames from "classnames";
import { cloneVNode, defineComponent, inject, reactive, ref } from "vue";
import { ItemType, MenuContext, MenuKey, SubMenuProps } from "./types";

const props = SubMenuProps();

export default defineComponent({
  name: "cSubMenu",
  props: props,
  setup(props, { emit, attrs, slots }) {
    const parentCtx = inject<MenuContext>(MenuKey);
    const menuOpen = ref(false);
    const subClass = reactive({
      "c-submenu": true,
      "menu-opened":
        parentCtx?.type !== "vertical" ? menuOpen.value : !menuOpen.value,
    });

    const handleClick = (e: Event) => {
      e.preventDefault();
      subClass["menu-opened"] = !subClass["menu-opened"];
    };

    let timer: any;
    // handleMouse
    const handleMouse = (e: Event, toggle: boolean) => {
      clearTimeout(timer);
      e.preventDefault();
      timer = setTimeout(() => {
        subClass["menu-opened"] = toggle;
      }, 100);
    };
    // console.log(parentCtx?.type !== "vertical");

    const clickEvents =
      parentCtx?.type === "vertical"
        ? {
            onClick: handleClick,
          }
        : {};

    const hoverEvents =
      parentCtx?.type !== "vertical"
        ? {
            onMouseenter: (e: Event) => {
              handleMouse(e, true);
            },
            onMouseleave: (e: Event) => {
              handleMouse(e, false);
            },
          }
        : {};

    return () => {
      const renderChildren = () => {
        const items = slots.default!().map((item, index) => {
          if ((item.type as ItemType).name === "cMenuItem") {
            return cloneVNode(item, {
              index: `${props.index}-${index.toString()}`,
            });
          } else {
            console.error("must be a cMenuItem");
          }
        });

        return <ul class={subClass}>{items}</ul>;
      };

      const { index, title } = props;
      const classes = classNames("menu-item submenu-item", {
        "is-active": parentCtx!.index.split('-')[0] === index,
      });
      
      return (
        <li {...attrs} key={index} class={classes} {...hoverEvents}>
          <div class="submenu-title" {...clickEvents} onClick={handleClick}>
            {title}
          </div>

          {renderChildren()}
        </li>
      );
    };
  },
});
