import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cLoading from "./cLoading";

cLoading.install = (app: App) => {
  app.component(cLoading.name as string, cLoading);
};

export default cLoading as SFCWithInstall<typeof cLoading>;
