// const decsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
    return {
        preserveWhiteSpace:true,
        extractCSS:!isDev
    }
}