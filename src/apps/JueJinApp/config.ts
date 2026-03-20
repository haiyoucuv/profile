import { AppConfig } from "@system";
import juejinIcon from "./assets/logo.svg";

export const config: AppConfig = {
    id: "JueJinApp",
    name: "掘金",
    icon: juejinIcon,
    
    // 注册到 Docker
    registerToDocker: true,
    dockerOrder: 6,
    
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