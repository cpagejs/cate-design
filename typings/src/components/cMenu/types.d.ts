import { PropType } from "vue";
declare const MenuKey = "menuKey";
declare type SelectFunc = (selectedIndex: string) => void;
declare type MenuMode = "horizontal" | "vertical";
declare const MenuProps: () => {
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
    };
    onSelect: PropType<SelectFunc>;
};
declare const MenuItemProps: () => {
    index: {
        type: StringConstructor;
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
declare const SubMenuProps: () => {
    index: StringConstructor;
    title: StringConstructor;
};
interface ItemType {
    [key: string]: any;
}
interface MenuContext {
    index: string;
    onSelect?: SelectFunc;
    mode?: MenuMode;
}
export { SubMenuProps, ItemType, MenuKey, MenuProps, MenuItemProps, MenuContext, };
