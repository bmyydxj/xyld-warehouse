const htmlConfig = require("./html.config");  //导入页面配置文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");    //清除多余js文件
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css样式抽离
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩文件

module.exports = [  // 页面文件配置
    //....
    ...htmlConfig ,  //序列化配置
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin("Zhang xinyang template, piracy will be investigated "),
    new ExtractTextPlugin("static/css/[name]-[hash:5].css"),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
    }),
    new webpack.ProvidePlugin({
        $:"jquery"
    })
    
]