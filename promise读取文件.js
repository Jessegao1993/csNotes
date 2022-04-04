//引入fs模块
const { throws } = require('assert')
const fs = require('fs')
//调用方法读取文件
// fs.readFile('./输出内容.md',(err,data)=>{
//     if (err) {
//         throw err
//     }
//     console.log(data.toString())
// })
//使用promise封装
const p = new Promise(function(resolve,reject) {
    fs.readFile("./输出内容.md",(err,data)=>{
        if(err) reject(err);
        resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log("读取失败")
})