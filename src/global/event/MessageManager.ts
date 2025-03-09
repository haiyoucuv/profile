import {ListenerFunc} from "./EventMessage.ts";

class EventData {
    public event!: string;
    public listener!: ListenerFunc;
    public object: any;
}

/** 批量注册、移除全局事件对象 */
export class MessageEventData {
    private events: Map<string, Array<EventData>> = new Map();

    /**
     * 注册全局事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    on(event: string, listener: ListenerFunc, object?: object) {
        let eds = this.events.get(event);
        if (eds == null) {
            eds = [];
            this.events.set(event, eds);
        }
        const ed: EventData = new EventData();
        ed.event = event;
        ed.listener = listener;
        ed.object = object;
        eds.push(ed);

        globalMsg.on(event, listener, object);
    }

    /**
     * 移除全局事件
     * @param event     事件名
     * @param listener
     * @param object
     */
    off(event: string, listener?: Function, object?: object) {
        const eds = this.events.get(event);
        if (!eds) return;

        for (const eb of eds) {
            if(listener && eb.listener != listener) continue;
            if(object && eb.object != object) continue;
            globalMsg.off(event, eb.listener, eb.object);
        }
    }

    /**
     * 触发全局事件
     * @param event      事件名
     * @param args       事件参数
     */
    dispatchEvent(event: string, ...args: any) {
        globalMsg.dispatchEvent(event, ...args);
    }

    /** 清除所有的全局事件监听 */
    clear() {
        const keys = Array.from(this.events.keys());
        for (const event of keys) {
            this.off(event)
        }
    }
}

/**
 * 全局消息管理
 * @example
 // 注册持续监听的全局事件
 export class RoleViewComp extends Component{
     onLoad(){
         // 监听全局事件
         oops.message.on(GameEvent.GameServerConnected, this.onHandler, this);
     }

     protected onDestroy() {
         // 对象释放时取消注册的全局事件
         oops.message.off(GameEvent.GameServerConnected, this.onHandler, this);
     }

     private onHandler(event: string, args: any) {
         switch (event) {
             case GameEvent.GameServerConnected:
             console.log("处理游戏服务器连接成功后的逻辑");
             break;
         }
     }
 }

 // 注册只触发一次的全局事件
 export class RoleViewComp extends Component{
     onLoad(){
         // 监听一次事件，事件响应后，该监听自动移除
         oops.message.once(GameEvent.GameServerConnected, this.onHandler, this);
     }

     private onHandler(event: string, args: any) {
         switch (event) {
             case GameEvent.GameServerConnected:
             console.log("处理游戏服务器连接成功后的逻辑");
             break;
         }
     }
 }
 */
export class MessageManager {
    private events: Map<string, Array<EventData>> = new Map();

    /**
     * 注册全局事件
     * @param event      事件名
     * @param listener   处理事件的侦听器函数
     * @param object     侦听函数绑定的作用域对象
     */
    on(event: string, listener: ListenerFunc, object?: object) {
        if (!event || !listener) {
            console.warn(`注册【${event}】事件的侦听器函数为空`);
            return;
        }

        let eds = this.events.get(event);
        if (eds == null) {
            eds = [];
            this.events.set(event, eds);
        }

        const length = eds.length;
        for (let i = 0; i < length; i++) {
            const bin = eds[i];
            if (bin.listener == listener && bin.object == object) {
                console.warn(`名为【${event}】的事件重复注册侦听器`);
            }
        }


        const data: EventData = new EventData();
        data.event = event;
        data.listener = listener;
        data.object = object;
        eds.push(data);
    }

    /**
     * 监听一次事件，事件响应后，该监听自动移除
     * @param event     事件名
     * @param listener  事件触发回调方法
     * @param object    侦听函数绑定的作用域对象
     */
    once(event: string, listener: ListenerFunc, object: object) {
        let _listener: any = ($event: string, ...$args: any) => {
            this.off(event, _listener, object);
            _listener = null;
            listener.call(object, $event, $args);
        }
        this.on(event, _listener, object);
    }

    /**
     * 移除全局事件
     * @param event     事件名
     * @param listener  处理事件的侦听器函数
     * @param object    侦听函数绑定的作用域对象
     */
    off(event: string, listener: Function, object: object) {
        const eds = this.events.get(event);

        if (!eds) {
            console.log(`名为【${event}】的事件不存在`);
            return;
        }

        const length = eds.length;
        for (let i = 0; i < length; i++) {
            const bin: EventData = eds[i];
            if (bin.listener == listener && bin.object == object) {
                eds.splice(i, 1);
                break;
            }
        }

        if (eds.length == 0) {
            this.events.delete(event);
        }
    }

    /**
     * 触发全局事件
     * @param event      事件名
     * @param args       事件参数
     */
    _dispatchEvent(event: string, ...args: any) {
        const list = this.events.get(event);

        if (list != null) {
            const eds: Array<EventData> = list.concat();
            const length = eds.length;
            for (let i = 0; i < length; i++) {
                const eventBin = eds[i];
                eventBin.listener.call(eventBin.object, event, ...args);
            }
        }
    }

    dispatchEvent(event: string, ...args: any) {
        this._dispatchEvent(event, ...args);
    }

}

export const globalMsg = new MessageManager();