declare const loadingProps: () => {
    color: {
        type: StringConstructor;
        default: string;
    };
    styleLoading: {
        type: ObjectConstructor;
        default(): {};
    };
};
export { loadingProps };
