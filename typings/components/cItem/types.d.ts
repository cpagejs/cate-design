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
    rightArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export { itemProps };
