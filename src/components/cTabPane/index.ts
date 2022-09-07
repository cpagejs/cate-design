import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTabPane from "../cTabs/tabPane";

cTabPane.install = (app: App) => {
  app.component(cTabPane.name, cTabPane);
};

export default cTabPane as SFCWithInstall<typeof cTabPane>;
