import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cButtonFooter from "./cButtonFooter";

cButtonFooter.install = (app: App) => {
  app.component(cButtonFooter.name, cButtonFooter);
};

export default cButtonFooter as SFCWithInstall<typeof cButtonFooter>;