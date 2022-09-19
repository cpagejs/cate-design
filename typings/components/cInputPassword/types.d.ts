declare const inputPwdProps: () => {
    value: {
        type: StringConstructor;
        default: string;
    };
    label: {
        default: string;
        type: StringConstructor;
    };
    length: {
        default: number;
        type: NumberConstructor;
    };
    placeholder: {
        default: string;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export { inputPwdProps };
