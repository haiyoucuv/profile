import { AppConfig } from "../AppConfig.ts";
import lutIcon from "../../assets/icon/web-design.svg";

export const config: AppConfig = {
  id: 'lut-color-app',
  name: 'LUT调色师',
  icon: lutIcon,
  registerToDocker: true,
  dockerOrder: 9,
  defaultWindow: {
    width: 1200,
    height: 800,
    x: 100,
    y: 50,
    resizable: true,
    minimizable: true,
    maximizable: true,
  }
};
