import { SFCWithInstall } from "../utils/types";
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "maskClick"[], "maskClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onMaskClick?: ((...args: any[]) => any) | undefined;
}, {
    isShow: boolean;
    showMask: boolean;
    position: string;
}>>;
export default _default;
