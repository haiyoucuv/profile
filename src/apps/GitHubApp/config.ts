import { AppConfig } from "../AppConfig.ts";
import github from "../../assets/icon/github.svg";

export const config: AppConfig = {
    id: "GitHubApp",
    name: "GitHub",
    icon: github,
    
    // 注册到 Docker
    registerToDocker: true,
    dockerOrder: 4,
    
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
  