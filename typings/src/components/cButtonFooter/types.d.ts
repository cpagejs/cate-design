declare const buttonFooterProps: () => {
    text: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    backgroungColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export { buttonFooterProps };
