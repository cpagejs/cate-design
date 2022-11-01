import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cMenu from "./cMenu";

cMenu.install = (app: App) => {
  app.component(cMenu.name, cMenu);
};

export default cMenu as SFCWithInstall<typeof cMenu>;
