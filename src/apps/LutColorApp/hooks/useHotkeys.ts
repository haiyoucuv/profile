import { useEffect } from 'react';

export interface HotkeyHandler {
  [key: string]: () => void;
}

/**
 * 简化的快捷键Hook
 * 支持常见的修饰键组合
 */
export function useHotkeys(shortcuts: HotkeyHandler, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // 构建快捷键字符串
      const modifiers = [];
      if (e.ctrlKey) modifiers.push('ctrl');
      if (e.metaKey) modifiers.push('cmd');
      if (e.shiftKey) modifiers.push('shift');
      if (e.altKey) modifiers.push('alt');
      
      const key = e.key.toLowerCase();
      const hotkeyString = [...modifiers, key].join('+');
      
      // 查找匹配的处理函数
      const handler = shortcuts[hotkeyString];
      if (handler) {
        e.preventDefault();
        e.stopPropagation();
        handler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts, enabled]);
}

/**
 * 预定义的常用快捷键组合
 */
export const commonHotkeys = {
  // 缩放相关
  zoomIn: ['ctrl+=', 'cmd+=', 'ctrl+plus'],
  zoomOut: ['ctrl+-', 'cmd+-', 'ctrl+minus'],
  zoomReset: ['ctrl+0', 'cmd+0'],
  zoomFit: ['ctrl+1', 'cmd+1'],
  
  // 文件操作
  save: ['ctrl+s', 'cmd+s'],
  open: ['ctrl+o', 'cmd+o'],
  export: ['ctrl+e', 'cmd+e'],
  
  // 编辑操作
  undo: ['ctrl+z', 'cmd+z'],
  redo: ['ctrl+y', 'cmd+y', 'ctrl+shift+z', 'cmd+shift+z'],
  
  // 视图操作
  fullscreen: ['f11', 'f'],
  escape: ['escape'],
};

/**
 * 创建多个快捷键映射到同一个处理函数
 */
export function createHotkeyMap(hotkeyGroups: { [action: string]: string[] }, handlers: { [action: string]: () => void }): HotkeyHandler {
  const map: HotkeyHandler = {};
  
  Object.entries(hotkeyGroups).forEach(([action, hotkeys]) => {
    const handler = handlers[action];
    if (handler) {
      hotkeys.forEach(hotkey => {
        map[hotkey] = handler;
      });
    }
  });
  
  return map;
}
