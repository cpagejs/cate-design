import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cAutoComplete from "./cAutoComplete";

cAutoComplete.install = (app: App) => {
  app.component(cAutoComplete.name as string, cAutoComplete);
};

export default cAutoComplete as SFCWithInstall<typeof cAutoComplete>;
