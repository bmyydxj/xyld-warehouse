const HtmlWebpackPlugin = require("html-webpack-plugin");  // 引用页面配置

module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"] // 配置index文件
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/dund.html",
        filename: "static/pages/dund.html",
        chunks: ["edfs"]  // 配置about文件
    }),
]