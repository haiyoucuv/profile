import { VirtualApp } from "./VirtualApp.ts";
import { AppConfig } from "./AppConfig.ts";

export interface AppManifest {
  config: AppConfig;
  lazyImport: () => Promise<typeof VirtualApp> | typeof VirtualApp;
}

export interface AppInfo {
  id: string;
  name: string;
  icon: string;
  lazyImport: () => Promise<typeof VirtualApp> | typeof VirtualApp;
  isLoaded?: boolean;
  appClass?: typeof VirtualApp;
}

export class AppRegistry {
  private static _ins: AppRegistry;
  private manifests = new Map<string, AppManifest>();
  private apps = new Map<string, AppInfo>();

  static get ins(): AppRegistry {
    return AppRegistry._ins || (AppRegistry._ins = new AppRegistry());
  }

  // 自动发现应用
  static async discoverAppsWithGlob(): Promise<AppManifest[]> {
    const manifests: AppManifest[] = [];

    // 按规则自动导入应用，要求开发app有一定的规则，但是不需要在系统里手动注册
    const appModules = import.meta.glob('./*/main.{ts,tsx}', { eager: true });

    for (const [path, module] of Object.entries(appModules)) {
      try {
        const appModule = module as any;
        if (appModule.default) {
          manifests.push(appModule.default);
        }
      } catch (error) {
        console.warn(`Failed to load app from ${path}:`, error);
      }
    }

    return manifests;
  }

  // 注册应用清单
  registerManifest(manifest: AppManifest): void {
    this.manifests.set(manifest.config.id, manifest);
    // 同时注册到应用信息
    this.registerFromManifest(manifest);
  }

  // 从清单注册应用
  registerFromManifest(manifest: AppManifest): void {
    this.apps.set(manifest.config.id, {
      id: manifest.config.id,
      name: manifest.config.name,
      icon: manifest.config.icon,
      lazyImport: manifest.lazyImport
    });
  }

  // 获取所有注册到 Docker 的应用清单
  getDockerManifests(): AppManifest[] {
    return Array.from(this.manifests.values())
      .filter(manifest => manifest.config.registerToDocker)
      .sort((a, b) => a.config.dockerOrder - b.config.dockerOrder);
  }

  // 获取所有注册到 Docker 的应用信息
  getDockerAppInfos(): AppInfo[] {
    const dockerManifests = this.getDockerManifests();
    return dockerManifests.map(manifest => ({
      id: manifest.config.id,
      name: manifest.config.name,
      icon: manifest.config.icon,
      lazyImport: manifest.lazyImport
    }));
  }

  // 动态加载应用类
  async loadApp(appId: string): Promise<typeof VirtualApp | null> {
    const appInfo = this.apps.get(appId);
    if (!appInfo) {
      console.warn(`App ${appId} not found`);
      return null;
    }

    // 如果已经加载过，直接返回
    if (appInfo.appClass) {
      return appInfo.appClass;
    }

    try {
      // 动态导入应用
      const result = appInfo.lazyImport();
      const appClass = result instanceof Promise ? await result : result;

      if (!appClass) {
        console.error(`App class not found for ${appId}`);
        return null;
      }

      appInfo.appClass = appClass;
      appInfo.isLoaded = true;
      console.log(`App ${appId} loaded successfully`);
      return appClass;
    } catch (error) {
      console.error(`Failed to load app ${appId}:`, error);
      return null;
    }
  }

  // 预加载应用（可选）
  async preloadApp(appId: string): Promise<void> {
    await this.loadApp(appId);
  }
}
