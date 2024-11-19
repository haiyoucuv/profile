import Emittery from 'emittery';

export enum TimeEvents {
    HOUR_CHANGED = 'hourChanged',
    MINUTE_CHANGED = 'minuteChanged',
    DAY_NIGHT_CHANGED = 'dayNightChanged',
    TIME_UPDATED = 'timeUpdated'
}

export enum DayPhase {
    DAWN = 'DAWN',     // 黎明
    DAY = 'DAY',      // 白天
    DUSK = 'DUSK',    // 黄昏
    NIGHT = 'NIGHT'   // 夜晚
}

interface TimeConfig {
    startHour?: number;      // 起始小时
    startMinute?: number;    // 起始分钟
    timeScale?: number;      // 时间流速（1 = 现实时间，2 = 2倍速）
    pauseOnStart?: boolean;  // 启动时是否暂停
}

export class TimeSystem extends Emittery {
    private hour: number;
    private minute: number;
    private timeScale: number;
    private isPaused: boolean;
    private currentPhase: DayPhase;
    private accumulatedTime: number = 0;

    // 常量定义
    private readonly MINUTES_PER_HOUR = 60;
    private readonly HOURS_PER_DAY = 24;
    private readonly REAL_SECONDS_PER_MINUTE = 1; // 1秒现实时间 = 1分钟游戏时间

    constructor(config: TimeConfig = {}) {
        super();

        this.hour = config.startHour ?? 6;        // 默认从早上6点开始
        this.minute = config.startMinute ?? 0;
        this.timeScale = config.timeScale ?? 1;
        this.isPaused = config.pauseOnStart ?? false;

        // 初始化当前时间段
        this.currentPhase = this.calculateDayPhase();
    }

    public update(deltaTime: number): void {
        if (this.isPaused) return;

        // 累积时间
        this.accumulatedTime += deltaTime * this.timeScale;

        // 计算需要增加的分钟数
        const minutesToAdd = Math.floor(this.accumulatedTime / this.REAL_SECONDS_PER_MINUTE);
        if (minutesToAdd > 0) {
            this.accumulatedTime -= minutesToAdd * this.REAL_SECONDS_PER_MINUTE;
            this.addMinutes(minutesToAdd);
        }
    }

    private addMinutes(minutes: number): void {
        const oldHour = this.hour;
        const oldPhase = this.currentPhase;

        this.minute += minutes;

        // 处理小时进位
        while (this.minute >= this.MINUTES_PER_HOUR) {
            this.minute -= this.MINUTES_PER_HOUR;
            this.hour = (this.hour + 1) % this.HOURS_PER_DAY;

            // 触发小时变化事件
            this.emit(TimeEvents.HOUR_CHANGED, this.hour);
        }

        // 检查并更新日夜阶段
        this.currentPhase = this.calculateDayPhase();
        if (oldPhase !== this.currentPhase) {
            this.emit(TimeEvents.DAY_NIGHT_CHANGED, this.currentPhase);
        }

        // 触发时间更新事件
        this.emit(TimeEvents.TIME_UPDATED, this.getTimeData());
    }

    private calculateDayPhase(): DayPhase {
        if (this.hour >= 5 && this.hour < 7) return DayPhase.DAWN;
        if (this.hour >= 7 && this.hour < 17) return DayPhase.DAY;
        if (this.hour >= 17 && this.hour < 19) return DayPhase.DUSK;
        return DayPhase.NIGHT;
    }

    // 公共方法
    public getTimeString(): string {
        const hourStr = this.hour.toString().padStart(2, '0');
        const minStr = this.minute.toString().padStart(2, '0');
        return `${hourStr}:${minStr}`;
    }

    public getTimeData() {
        return {
            hour: this.hour,
            minute: this.minute,
            phase: this.currentPhase,
            timeString: this.getTimeString()
        };
    }

    public getCurrentPhase(): DayPhase {
        return this.currentPhase;
    }

    public setTime(hour: number, minute: number = 0): void {
        this.hour = hour % this.HOURS_PER_DAY;
        this.minute = minute % this.MINUTES_PER_HOUR;
        this.currentPhase = this.calculateDayPhase();
        this.emit(TimeEvents.TIME_UPDATED, this.getTimeData());
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