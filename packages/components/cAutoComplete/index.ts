import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cAutoComplete from "./cAutoComplete";

cAutoComplete.install = (app: App) => {
  app.component(cAutoComplete.name, cAutoComplete);
};

export default cAutoComplete as SFCWithInstall<typeof cAutoComplete>;
