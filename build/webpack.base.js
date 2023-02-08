const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: path.join(_dirname, "../src/index.tsx"),//入口文件
    output: {
        filename: "static/js/[name].js",//每个输出js的名称
        path: path.join(_dirname, "../dist"),//打包输出路径
        // clean: true,//webpack4需要，webpack5就内置了
        publicPath: "/"
    },
    //rules
    rules: [
        {
            test: /.(ts|tsx)$/,//匹配ts。tsx文件
            use: {
                loader: "babel-loader",
                options: ["@babel/preset-react", "@babel/preset-typescript"]
            }

        },



    ],
    //resolve
    resolve: {
        extensions: [".jsx", ".js", ".tsx", ".ts"]
    },
    //plugin
    plugins: [


    ]

}