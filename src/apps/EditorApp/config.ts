import { AppConfig } from "../AppConfig.ts";
import vscode from "../../assets/icon/vscode.svg";

export const config: AppConfig = {
  id: "EditorApp",
  name: "代码编辑器",
  icon: vscode,

  // 注册到 Docker
  registerToDocker: true,
  dockerOrder: 1,

  // 默认窗口配置
  defaultWindow: {
    width: 900,
    height: 750,
    x: 25,
    y: 25,
    resizable: true,
    minimizable: true,
    maximizable: true
  }
};
