import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cLayout from "./cLayout";

cLayout.install = (app: App) => {
  app.component(cLayout.name, cLayout);
};

export default cLayout as SFCWithInstall<typeof cLayout>;