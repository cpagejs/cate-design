import { DataSourceType } from "./type";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    fetchSuggestions: {
        type: import("vue").PropType<(str: string) => DataSourceType[] | Promise<import("./type").DataSourceObject[]>>;
        required: boolean;
    };
    onSelect: import("vue").PropType<(item: DataSourceType) => void>;
    renderOption: import("vue").PropType<(item: DataSourceType) => import("vue").VNodeTypes>;
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
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    fetchSuggestions: {
        type: import("vue").PropType<(str: string) => DataSourceType[] | Promise<import("./type").DataSourceObject[]>>;
        required: boolean;
    };
    onSelect: import("vue").PropType<(item: DataSourceType) => void>;
    renderOption: import("vue").PropType<(item: DataSourceType) => import("vue").VNodeTypes>;
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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: "lg" | "sm";
    disabled: boolean;
    modelValue: string;
}, {}, {
    cInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "keydown")[], "update:modelValue" | "change" | "keydown", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onKeydown?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        size: "lg" | "sm";
        disabled: boolean;
        modelValue: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
