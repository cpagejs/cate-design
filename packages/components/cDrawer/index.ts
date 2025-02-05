import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cDrawer from "./cDrawer";

cDrawer.install = (app: App) => {
  app.component(cDrawer.name as string, cDrawer);
};

export default cDrawer as SFCWithInstall<typeof cDrawer>;
