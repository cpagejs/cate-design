import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTimeCircle from "./cTimeCircle";

cTimeCircle.install = (app: App) => {
  app.component(cTimeCircle.name as string, cTimeCircle);
};

export default cTimeCircle as SFCWithInstall<typeof cTimeCircle>;
