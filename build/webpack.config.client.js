const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')
const defaultPluins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    }),
    new VueClientPlugin()
]


const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: {
        index: '/public/index.html'
    },
    proxy: {
        '/api': 'http://127.0.0.1:3333',
        '/user': 'http://127.0.0.1:3333/'
    },
    hot: true
}
let config;
if (isDev) {
    config = merge(baseConfig, {
        devServer,
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [{
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
        plugins: defaultPluins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/client-entry.js'),
            vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js',
            publicPath: '/public/'
        },
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            'stylus-loader'
                        ]
                    })
                }
            ]
        },
        plugins: defaultPluins.concat([
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        ])
    })
}

config.resolve = {
    alias: {
        'model': path.join(__dirname, '../client/model/client-model.js')
    }
}

module.exports = config
