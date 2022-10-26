import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTimeOut from "./cTimeOut";

cTimeOut.install = (app: App) => {
  app.component(cTimeOut.name, cTimeOut);
};

export default cTimeOut as SFCWithInstall<typeof cTimeOut>;
