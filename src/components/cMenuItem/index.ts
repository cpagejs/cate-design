import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cMenuItem from "../cMenu/menuItem";

cMenuItem.install = (app: App) => {
  app.component(cMenuItem.name, cMenuItem);
};

export default cMenuItem as SFCWithInstall<typeof cMenuItem>;
