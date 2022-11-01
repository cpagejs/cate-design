declare const loadingProps: () => {
    isShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
};
export { loadingProps };
