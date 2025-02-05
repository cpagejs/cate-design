import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cLayout from "./cLayout";

cLayout.install = (app: App) => {
  app.component(cLayout.name as string, cLayout);
};

export default cLayout as SFCWithInstall<typeof cLayout>;
