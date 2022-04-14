 // 引入一个包   
const path = require("path")
 //引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 module.exports = {
     // 指定构建环境
    mode: "development",
     //入口
    //  entry:{
    //      app:'./src/index'
    //  },
     entry:"./src/index.ts",
     output:{
         path:path.resolve(__dirname,'dist'),//打包文件目录
         filename:'bundle.js',//打包后文件名
         //publicPath:"/" //打包后的资源的访问路径前缀
         environment:{
             arrowFunction:false,
             const:false
         }
     },
     module:{//打包时使用的模块
         rules:[
             {
                 test:/\.ts$/,//指定规则生效文件
                 use:'ts-loader',//使用的loader
                 exclude:/node_modules/ // 排除这个node_modules文件夹里面的
                 //loader:'babel-loader'
                 // babel-loader的参数配置也可以这样写，我们这里是新建一个.babelrc文件的方式来配置
                 // use: {  
                 //     loader: 'babel-loader',
                 //     options: {
                 //     presets: ['@babel/preset-env']
                 //     }
                 // }
             },
             {
                 //设置less文件的处理
                 test:/\.less$/,
                 use:[
                     'style-loader',
                     'css-loader',
                     //引入postcss
                     {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                     },
                     'less-loader'
                 ],
             }
         ]
     },
     //配置webpack插件
     plugins:[
         new HtmlWebpackPlugin({
             //title:"Webpage"
             template:"./src/index.html"
         }),
         new CleanWebpackPlugin()
     ],
     //设置引用模块
     resolve:{
         extensions:['.ts','.js']
     }
 }
 // .babelrc文件
//  {
//    "presets": [
//        ["@babel/preset-env",{
//            "modules":false,
//            "targets":{
//                "browsers":["> 1%","last 2 versions","not ie<=8"]
//            }
//        }],
//        "@babel/preset-react"
//    ],
//    "plugins": [
//        ["@babel/plugin-transform-runtime",{
//            "corejs":3,
//            "useBUildIns":"usage"
//        }]
//    ]
//  }
 // package.json 修改scripts选项中的dev命令 
 
//  "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "dev": "webpack-dev-server --config build/webpack.config.js",
//    "build": "webpack --config build/webpack.config.js" // --config 指的是使用指定文件的配置 这里我们使用的是刚刚创建的webpack.config.js
//  },




