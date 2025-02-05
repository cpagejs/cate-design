import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cHeaderBack from "./cHeaderBack";

cHeaderBack.install = (app: App) => {
  app.component(cHeaderBack.name as string, cHeaderBack);
};

export default cHeaderBack as SFCWithInstall<typeof cHeaderBack>;
