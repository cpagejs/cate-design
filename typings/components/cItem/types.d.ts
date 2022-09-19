declare const itemProps: () => {
    avatar: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    rightText: {
        type: StringConstructor;
        default: string;
    };
    rightArrowShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    rightArrowIcon: {
        type: StringConstructor;
        default: string;
    };
};
export { itemProps };
