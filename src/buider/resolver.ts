export const resolvePlugin = () => ({
    name: 'browser-resolver',
    setup(build) {
        build.onResolve({ filter: /.*/ }, async (args) => {
            if (args.kind === 'import-statement') {
                return {
                    path: args.path,
                    namespace: 'browser-module',
                    pluginData: { importer: args.importer }
                }
            }
        })
    }
})
