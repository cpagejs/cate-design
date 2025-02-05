import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Form from "./cForm";

Form.install = (app: App) => {
  app.component(Form.name as string, Form);
};

export default Form as SFCWithInstall<typeof Form>;
