import { AppConfig } from "@system";
import bilibili from "./assets/logo.svg";

export const config: AppConfig = {
  id: "BiliBiliApp",
  name: "哔哩哔哩",
  icon: bilibili,

  // 注册到 Docker
  registerToDocker: true,
  dockerOrder: 3,

  // 默认窗口配置
  defaultWindow: {
    width: 1200,
    height: 800,
    x: 50,
    y: 50,
    resizable: true,
    minimizable: true,
    maximizable: true
  }
};
