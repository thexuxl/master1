const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require("autoprefixer")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式
module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),//入口文件
    output: {
        filename: "static/js/[name].[chunkhash:8].js",//每个输出js的名称
        path: path.join(__dirname, "../dist"),//打包输出路径
        // clean: true,//webpack4需要，webpack5就内置了
        publicPath: "/"
    },
    //rules
    module: {
        rules: [
            //ts语言
            {
                include: [path.resolve(__dirname, "../src")],//只对项目的src文件的ts，tsx文件进行loader解析
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: ['thread-loader', 'babel-loader',]//'thread-loader',线程
            },
            //css样式
            {
                test: /.css$/, //匹配所有的 css 文件
                include: [path.resolve(__dirname, '../src')],
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader'
                ]
            },

            {
                test: /.(less|scss|sass)$/,
                include: [path.resolve(__dirname, "../src")],
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    "css-loader", "less-loader", 'postcss-loader', 'sass-loader',]
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
                    filename: "static/images/[name].[contenthash:8][next]",//文件输出目录
                }
            },
            //媒体字
            {
                test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体文件
                // ...
                generator: {
                    filename: 'static/fonts/[name].[contenthash:8][ext]', // 加上[contenthash:8]
                },
            },
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 40 * 1024, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'static/media/[name].[contenthash:8][ext]', // 文件输出目录和命名
                },
            },

        ]
    },


    //resolve
    resolve: {
        extensions: [".jsx", '.js', '.tsx', '.ts'],
        alias: {
            '@': path.join(__dirname, '../src')//路径src
        },
        modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
    },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
        }),
        new CleanWebpackPlugin() // 引入插件
    ],
    //使用文件缓存
    cache: {
        type: 'filesystem', // 使用文件缓存
    },

}