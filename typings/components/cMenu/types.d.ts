import { PropType } from "vue";
declare const MenuKey = "menuKey";
type SelectFunc = (selectedIndex: string) => void;
type MenuMode = "horizontal" | "vertical";
declare const MenuProps: () => {
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    type: {
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
    onSelect: SelectFunc;
    type?: MenuMode;
}
export { SubMenuProps, ItemType, MenuKey, MenuProps, MenuItemProps, MenuContext, };
