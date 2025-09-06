import { AppConfig } from "../AppConfig.ts";
import logo from "../../assets/SlapKirkApp/logo.svg";

export const config: AppConfig = {
  id: "SlapKirkApp",
  name: "Slap Kirk",
  icon: logo,

  // 注册到 Docker
  registerToDocker: true,
  dockerOrder: 8,

  // 默认窗口配置 - 为AI摄像头和游戏界面优化
  defaultWindow: {
    width: 1200,
    height: 800,
    x: 100,
    y: 50,
    resizable: true,
    minimizable: true,
    maximizable: true
  }
};
