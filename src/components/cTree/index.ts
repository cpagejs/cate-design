import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cTree from "./cTree";

cTree.install = (app: App) => {
  app.component(cTree.name, cTree);
};

export default cTree as SFCWithInstall<typeof cTree>;
