const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = webpackMerge.merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin()
        ],
        module:
        {
            rules:
            [
                {
                    test: /\.styl$/,
                    use:
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                    ]
                }
            ]
        }
    }
)
