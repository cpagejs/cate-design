import { App } from "vue";
export declare type SFCWithInstall<T> = T & {
    install(app: App): void;
};
