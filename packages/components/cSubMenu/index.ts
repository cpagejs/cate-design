import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cSubItem from "../cMenu/subMenu";

cSubItem.install = (app: App) => {
  app.component(cSubItem.name as string, cSubItem);
};

export default cSubItem as SFCWithInstall<typeof cSubItem>;
