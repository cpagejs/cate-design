import { PropType, VNodeTypes } from "vue";
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
declare const AutoCompleteProps: () => {
    fetchSuggestions: {
        type: PropType<(str: string) => DataSourceType[] | Promise<DataSourceObject[]>>;
        required: boolean;
    };
    onSelect: PropType<(item: DataSourceType) => void>;
    renderOption: PropType<(item: DataSourceType) => VNodeTypes>;
    disabled: BooleanConstructor;
    size: {
        type: PropType<"lg" | "sm">;
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
        type: PropType<(value: string) => void>;
    };
    onKeydown: {
        type: PropType<(e: KeyboardEvent) => void>;
    };
};
export { AutoCompleteProps, DataSourceObject };
