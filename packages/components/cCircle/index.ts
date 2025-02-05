import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cCircle from "./cCircle";

cCircle.install = (app: App) => {
  app.component(cCircle.name as string, cCircle);
};

export default cCircle as SFCWithInstall<typeof cCircle>;
