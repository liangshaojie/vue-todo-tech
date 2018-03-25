// const decsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
    return {
        preserveWhiteSpace:true,
        extractCSS:!isDev,
        cssModules:{},
        // hotReload:false   根据环境变量生成
        // loaders:{
        //     'docs':decsLoader
        // }

    }
}