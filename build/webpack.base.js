const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
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
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 预设执行顺序由右往左,所以先处理ts,再处理jsx
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },


    //resolve
    resolve: {
        extensions: [".jsx",'.js', '.tsx', '.ts'],
    },
    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        })
    ]


}