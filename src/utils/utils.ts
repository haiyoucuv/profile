export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | undefined;

    return function (this: any, ...args: Parameters<T>): void {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}
