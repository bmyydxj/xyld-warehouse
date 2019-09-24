const path = require("path");  // 引用配置
const entry = require("./dev.config");  // 引用入口文件配置
const rules = require("./locahe.config");  // 引用处理文件配置
const plugins = require("./plugin.config")  // 引用页面文件处理
module.exports = {
    context: path.resolve(__dirname, "../"),
    mode: "development",
    entry,  // 入口文件配置
    output: {  // 出口文件配置
        path: path.resolve(__dirname, "../dist/"),  // 配置出口位置
        filename: "static/js/[name]-[hash:5]-bundle.js",  // 配置js文件位置并加上hash值
        // publicPath: "http://localhost:8080"
    },
    module: {rules},  // 模块
    plugins,
    devServer: {  // 配置文件端口

        // 设置服务器访问的目录(默认为根目录)
        contentBase: path.resolve(__dirname, "../dist/"),
        // 设置服务器的ip地址,可以是localhost
        host: "localhost",
        // 设置端口
        port: 8080,
        // 设置自动拉起浏览器
        open: true,
        inline: true,
        // 模块热替换
        hot: true
    }
}