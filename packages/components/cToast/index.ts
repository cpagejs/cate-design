import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cToast from "./cToast";

cToast.install = (app: App) => {
  app.component(cToast.name, cToast);
};

export default cToast as SFCWithInstall<typeof cToast>;