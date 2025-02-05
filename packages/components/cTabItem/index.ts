import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTabItem from "../cTabs/tabItem";

cTabItem.install = (app: App) => {
  app.component(cTabItem.name as string, cTabItem);
};

export default cTabItem as SFCWithInstall<typeof cTabItem>;
