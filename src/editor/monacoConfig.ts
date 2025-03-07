import {editor} from 'monaco-editor'

export const MonacoEditorConfig: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    cursorBlinking: 'smooth',
    fontLigatures: true,
    formatOnPaste: true,
    formatOnType: true,
    fontSize: 16,
    showDeprecated: true,
    showUnused: true,
    showFoldingControls: 'mouseover',
    scrollBeyondLastLine: false,
    minimap: {
        enabled: true,
    },
    inlineSuggest: {
        enabled: false,
    },
    fixedOverflowWidgets: true,
    smoothScrolling: true,
    smartSelect: {
        selectSubwords: true,
        selectLeadingAndTrailingWhitespace: true,
    },
    tabSize: 2,
    overviewRulerBorder: true, // 不要滚动条的边框
    // 滚动条设置
    scrollbar: {
        verticalScrollbarSize: 14, // 竖滚动条
        horizontalScrollbarSize: 14, // 横滚动条
    },
    renderLineHighlight: "all", // 修改这里，明确指定类型
    selectOnLineNumbers: true, // 显示行号 默认true
    readOnly: false, // 只读
}
