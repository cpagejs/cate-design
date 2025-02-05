import { SFCWithInstall } from "../utils/types";
import cToast from "./cToast";
interface IToastConfig {
    msg: string;
    delay?: number;
    showMask?: boolean;
    onEnd?: () => void;
}
export declare function useToast({ msg, delay, showMask, onEnd }: IToastConfig): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare const _default: SFCWithInstall<typeof cToast>;
export default _default;
