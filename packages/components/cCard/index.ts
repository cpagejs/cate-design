import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import cCard from "./cCard";

cCard.install = (app: App) => {
  app.component(cCard.name, cCard);
};

export default cCard as SFCWithInstall<typeof cCard>;