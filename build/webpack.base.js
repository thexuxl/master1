const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require("autoprefixer")
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),//入口文件
    output: {
        filename: "static/js/[name].js",//每个输出js的名称
        path: path.join(__dirname, "../dist"),//打包输出路径
        // clean: true,//webpack4需要，webpack5就内置了
        publicPath: "/"
    },
    //rules
    module: {
        rules: [
            //ts语言
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: { loader: 'babel-loader', }
            },
            //css样式
            {
                test: /.(css|less|scss|sass)$/,
                use: ["style-loader", "css-loader", "less-loader", 'postcss-loader', 'sass-loader',]
            },
            //图片
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,//小于10kb转base64位
                    },
                }, generator: {
                    filename: "static/images/[name][hash:8][next]",//文件输出目录
                }
            },
            //媒体字
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 40 * 1024, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'static/media/[name][hash:8][ext]', // 文件输出目录和命名
                },
            },

        ]
    },


    //resolve
    resolve: {
        extensions: [".jsx", '.js', '.tsx', '.ts'],
    },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
        })
    ]


}