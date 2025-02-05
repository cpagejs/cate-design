import { PropType } from "vue";
type InputSize = "lg" | "sm";
declare const inputProps: () => {
    disabled: BooleanConstructor;
    size: {
        type: PropType<InputSize>;
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
export { inputProps };
