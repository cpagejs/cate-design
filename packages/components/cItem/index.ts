import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cItem from "./cItem";

cItem.install = (app: App) => {
  app.component(cItem.name as string, cItem);
};

export default cItem as SFCWithInstall<typeof cItem>;
