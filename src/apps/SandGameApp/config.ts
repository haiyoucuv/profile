import { AppConfig } from "@system";

import logo from "./assets/logo.png";

export const config: AppConfig = {
  id: "SandGameApp",
  name: "堆沙物语",
  icon: logo,

  // 注册到 Docker
  registerToDocker: true,
  dockerOrder: 5,

  // 默认窗口配置
  defaultWindow: {
    width: 350,
    height: 550,
    x: 150,
    y: 150,
    resizable: true,
    minimizable: true,
    maximizable: true
  }
};
