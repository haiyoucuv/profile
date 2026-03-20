import { AppConfig } from "@system";
import icon from "./assets/logo.svg";

export const config: AppConfig = {
    id: "FinderApp",
    name: "访达",
    icon: icon,
    registerToDocker: true,
    dockerOrder: 1,
    defaultWindow: {
        width: 800,
        height: 500,
        x: 150,
        y: 100,
    },
    permissions: ["fs.root"]
};
