import Emittery from "emittery";

export enum TimeEvents {
    HOUR_CHANGED = "hourChanged",
    MINUTE_CHANGED = "minuteChanged",
    DAY_NIGHT_CHANGED = "dayNightChanged",
    TIME_UPDATED = "timeUpdated"
}

export enum DayPhase {
    DAWN = "DAWN",     // 黎明
    DAY = "DAY",      // 白天
    DUSK = "DUSK",    // 黄昏
    NIGHT = "NIGHT"   // 夜晚
}

interface TimeConfig {
    startHour?: number;
    startMinute?: number;
    startSecond?: number;    // 新增：起始秒数
    timeScale?: number;
    pauseOnStart?: boolean;
}
export class TimeSystem extends Emittery {

    static _ins: TimeSystem;

    static get ins(): TimeSystem {
        if (!this._ins) {
            this._ins = new TimeSystem({
                startHour: 6,
                timeScale: 1,
                pauseOnStart: false
            });
        }
        return this._ins;
    }

    static destroy() {
        this._ins = null;
    }

    hour: number;
    minute: number;
    seconds: number;  // 改为 seconds，支持小数
    timeScale: number;
    isPaused: boolean;
    private currentPhase: DayPhase;
    private accumulatedTime: number = 0;

    // 修改常量
    private readonly SECONDS_PER_MINUTE = 60;
    private readonly MINUTES_PER_HOUR = 60;
    private readonly HOURS_PER_DAY = 24;

    constructor(config: TimeConfig = {}) {
        super();
        this.hour = config.startHour ?? 6;
        this.minute = config.startMinute ?? 0;
        this.seconds = config.startSecond ?? 0;
        this.timeScale = config.timeScale ?? 1;
        this.isPaused = config.pauseOnStart ?? false;
        this.currentPhase = this.calculateDayPhase();
    }

    public update(deltaTime: number): void {
        if (this.isPaused) return;

        // 更新累积时间
        this.accumulatedTime += deltaTime * this.timeScale;

        // 更新秒数，保留两位小数
        this.seconds += (deltaTime * this.timeScale);

        // 处理分钟进位
        if (this.seconds >= this.SECONDS_PER_MINUTE) {
            const minutesToAdd = Math.floor(this.seconds / this.SECONDS_PER_MINUTE);
            this.seconds %= this.SECONDS_PER_MINUTE;
            this.addMinutes(minutesToAdd);
        }

        // 触发时间更新事件
        this.emit(TimeEvents.TIME_UPDATED, this.getTimeData());
    }

    private addMinutes(minutes: number): void {
        const oldHour = this.hour;
        const oldPhase = this.currentPhase;

        this.minute += minutes;

        // 处理小时进位
        while (this.minute >= this.MINUTES_PER_HOUR) {
            this.minute -= this.MINUTES_PER_HOUR;
            this.hour = (this.hour + 1) % this.HOURS_PER_DAY;
            this.emit(TimeEvents.HOUR_CHANGED, this.getTimeData());
        }

        // 检查并更新日夜阶段
        this.currentPhase = this.calculateDayPhase();
        if (oldPhase !== this.currentPhase) {
            this.emit(TimeEvents.DAY_NIGHT_CHANGED, this.getTimeData());
        }

        this.emit(TimeEvents.MINUTE_CHANGED, this.getTimeData());
    }

    // 修改时间字符串输出格式，包含秒数
    public getTimeString(): string {
        const hourStr = this.hour.toString().padStart(2, "0");
        const minStr = this.minute.toString().padStart(2, "0");
        const secStr = this.seconds.toFixed(2).padStart(5, "0"); // 保留两位小数
        return `${hourStr}:${minStr}:${secStr}`;
    }

    public getTimeData() {
        return {
            hour: this.hour,
            minute: this.minute,
            seconds: this.seconds, // 保留两位小数
            phase: this.currentPhase,
            timeString: this.getTimeString()
        };
    }

    // 修改设置时间的方法，包含秒数
    public setTime(hour: number, minute: number = 0, seconds: number = 0): void {
        this.hour = hour % this.HOURS_PER_DAY;
        this.minute = minute % this.MINUTES_PER_HOUR;
        this.seconds = seconds % this.SECONDS_PER_MINUTE;
        this.currentPhase = this.calculateDayPhase();
        this.emit(TimeEvents.TIME_UPDATED, this.getTimeData());
    }

    private calculateDayPhase(): DayPhase {
        if (this.hour >= 5 && this.hour < 7) return DayPhase.DAWN;
        if (this.hour >= 7 && this.hour < 17) return DayPhase.DAY;
        if (this.hour >= 17 && this.hour < 19) return DayPhase.DUSK;
        return DayPhase.NIGHT;
    }


    public getCurrentPhase(): DayPhase {
        return this.currentPhase;
    }

    public setTimeScale(scale: number): void {
        this.timeScale = Math.max(0, scale);
    }

    public getTimeScale(): number {
        return this.timeScale;
    }

    public pause(): void {
        this.isPaused = true;
    }

    public resume(): void {
        this.isPaused = false;
    }

    public togglePause(): void {
        this.isPaused = !this.isPaused;
    }

} 