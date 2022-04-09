//引入一个包
const path = require('path')
//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //指定入口文件
    entry:"./src/index.ts",
    //指定打包文件所在目录
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",

    },
    //指定webpack打包时要使用的模块
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:'/node-modules/'
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new HtmlWebpackPlugin({
            title:"This is homepage"
        }),
    ]
}