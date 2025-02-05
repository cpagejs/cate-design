import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTabs from "./tabs";

cTabs.install = (app: App) => {
  app.component(cTabs.name as string, cTabs);
};

export default cTabs as SFCWithInstall<typeof cTabs>;
