import "./index.scss";
import "../../assets/iconfont/iconfont.css";
declare const _default: import("vue").DefineComponent<{
    fetchSuggestions: {
        type: import("vue").PropType<(str: string) => import("./type").DataSourceObject[] | Promise<import("./type").DataSourceObject[]>>;
        required: boolean;
    };
    onSelect: import("vue").PropType<(item: import("./type").DataSourceObject) => void>;
    renderOption: import("vue").PropType<(item: import("./type").DataSourceObject) => import("vue").VNodeTypes>;
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<"lg" | "sm">;
        default: string;
    };
    prepend: StringConstructor;
    append: StringConstructor;
    style: ObjectConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(value: string) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<(e: KeyboardEvent) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fetchSuggestions: {
        type: import("vue").PropType<(str: string) => import("./type").DataSourceObject[] | Promise<import("./type").DataSourceObject[]>>;
        required: boolean;
    };
    onSelect: import("vue").PropType<(item: import("./type").DataSourceObject) => void>;
    renderOption: import("vue").PropType<(item: import("./type").DataSourceObject) => import("vue").VNodeTypes>;
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<"lg" | "sm">;
        default: string;
    };
    prepend: StringConstructor;
    append: StringConstructor;
    style: ObjectConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(value: string) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<(e: KeyboardEvent) => void>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "lg" | "sm";
    modelValue: string;
}>;
export default _default;
