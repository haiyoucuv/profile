import { AppConfig } from "../AppConfig.ts";
import logo from "../../assets/NerveCatApp/logo.png";

export const config: AppConfig = {
  id: "NerveCatApp",
  name: "围住神经猫",
  icon: logo,

  // 注册到 Docker
  registerToDocker: false,
  dockerOrder: 7,

  // 默认窗口配置
  defaultWindow: {
    width: 350,
    height: 550,
    x: 100,
    y: 100,
    resizable: true,
    minimizable: true,
    maximizable: true
  }
};
