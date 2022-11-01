import { CustomEventFuncType } from "../cTree/types";
declare const checkBoxProps: () => {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    halfChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: CustomEventFuncType<boolean>;
};
export { checkBoxProps };
