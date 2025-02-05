import { PropType } from "vue";
import "./index.scss";
import { NewStringSchema } from "./types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<NewStringSchema | NewStringSchema[]>;
    };
}>, () => import("react").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<NewStringSchema | NewStringSchema[]>;
    };
}>> & Readonly<{}>, {
    prop: string;
    label: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
