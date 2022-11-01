import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTabs from "./tabs";

cTabs.install = (app: App) => {
  app.component(cTabs.name, cTabs);
};

export default cTabs as SFCWithInstall<typeof cTabs>;
