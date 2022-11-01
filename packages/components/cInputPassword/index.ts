import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cInputPassword from "./cInputPassword.vue";

cInputPassword.install = (app: App) => {
  app.component(cInputPassword.name, cInputPassword);
};

export default cInputPassword as SFCWithInstall<typeof cInputPassword>;
