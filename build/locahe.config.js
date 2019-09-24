const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css样式抽离
module.exports = [  //模块文件   js.css文件处理
    //babel 处理js
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    },
    //less样式 处理css
    {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    plugins: [
                        require("autoprefixer")
                    ]
                }
            }, "less-loader"]
        })
     },
    // //使用file-loader输出图片
    // {
    //     test: /\.(jpg|jpeg|svg|png)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: "url-loader",
    //         options: {
    //             name: "[name]-[hash:6].[ext]",
    //             outputPath: "static/images/"
    //         }
    //     },
    // },
    // // 处理HTML
    // {
    //     test: /\.html/,
    //     exclude: /node_modules/,
    //     loader: 'html-loader'
    // }
];