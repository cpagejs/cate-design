import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTimeOut from "./cTimeOut";

cTimeOut.install = (app: App) => {
  app.component(cTimeOut.name as string, cTimeOut);
};

export default cTimeOut as SFCWithInstall<typeof cTimeOut>;
