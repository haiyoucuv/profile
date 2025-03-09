import {editor, languages} from 'monaco-editor'

export const MonacoEditorConfig: editor.IStandaloneEditorConstructionOptions = {
    automaticLayout: true,
    formatOnPaste: true,
    formatOnType: true,
    fontSize: 16,
    showDeprecated: true,
    showUnused: true,
    showFoldingControls: 'mouseover',
    scrollBeyondLastLine: true,
    minimap: {
        enabled: true,
    },
    inlineSuggest:{
        enabled: true,
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
    renderLineHighlight: "all",
    selectOnLineNumbers: true,
    readOnly: false,

    accessibilitySupport: "off",
    wordWrap: "off",
}

export const TypeScriptConfig: languages.typescript.CompilerOptions = {
    target: languages.typescript.ScriptTarget.ESNext,
    module: languages.typescript.ModuleKind.ESNext,
    moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
    allowNonTsExtensions: true,
    allowJs: true,
    noEmit: true,
    esModuleInterop: true,
    jsx: languages.typescript.JsxEmit.React,
    reactNamespace: "React",
    allowSyntheticDefaultImports: true,
    isolatedModules: true
}
