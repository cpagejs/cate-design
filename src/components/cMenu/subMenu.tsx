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
        parentCtx?.mode !== "vertical" ? menuOpen.value : !menuOpen.value,
    });

    const handleClick = (e: Event) => {
      e.preventDefault();
      // menuOpen.value = !menuOpen.value;
      subClass["menu-opened"] = !subClass["menu-opened"];
    };

    let timer: any;
    const handleMouse = (e: Event, toggle: boolean) => {
      console.log("handleMouse", toggle);

      clearTimeout(timer);
      e.preventDefault();
      timer = setTimeout(() => {
        subClass["menu-opened"] = toggle;
      }, 100);
    };
    console.log(parentCtx?.mode !== "vertical");

    const clickEvents =
      parentCtx?.mode === "vertical"
        ? {
            onClick: handleClick,
          }
        : {};

    const hoverEvents =
      parentCtx?.mode !== "vertical"
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
          if ((item.type as ItemType).name === "MenuItem") {
            return cloneVNode(item, {
              index: `${props.index}-${index.toString()}`,
            });
          } else {
            console.error("must be a MenuItem");
          }
        });

        return <ul class={subClass}>{items}</ul>;
      };

      const { index, title } = props;
      const classes = classNames("menu-item submenu-item", {
        "is-active": parentCtx!.index === index,
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
