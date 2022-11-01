declare const loadingProps: () => {
    color: {
        type: StringConstructor;
        default: string;
    };
    styleLoading: {
        type: ObjectConstructor;
        default(): {};
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    huanLeftColor: {
        type: StringConstructor;
        default: string;
    };
    huanRightColor: {
        type: StringConstructor;
        default: string;
    };
};
export { loadingProps };
