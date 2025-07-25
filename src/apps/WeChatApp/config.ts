import { AppConfig } from "../AppConfig.ts";
import wechat from "../../assets/icon/wechat.svg";

export const config: AppConfig = {
  id: "WeChatApp",
  name: "微信公众号",
  icon: wechat,

  // 注册到 Docker
  registerToDocker: true,
  dockerOrder: 2,

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
