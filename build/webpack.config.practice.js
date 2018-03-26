const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')
const defaultPluins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.html')
    })
]


const devServer = {
    port: 8089,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    hot: true
}
let config;
config = merge(baseConfig,{
    entry:path.join(__dirname, '../practice/index.js'),
    devServer,
    resolve:{
        alias:{
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    devtool:'#cheap-module-eval-source-map',
    module: {
        rules:[{
            test: /\.styl/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        }],
    },
    plugins:defaultPluins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config
