
        // 引入fs模块
        const fs = require('fs')
const { resolve } = require('path')
        //fs读取出现回调地狱，难以阅读调试
        // fs.readFile('./输出内容1.md',(err,data1)=>{
        //     fs.readFile('./输出内容2.md',(err,data2)=>{
        //         let result = data1+data2
        //         console.log(result)
        // })
        // })
//使用promise实现
const p = new Promise((resolve,reject)=>{
    fs.readFile('./输出内容1.md',(err,data)=>{
        resolve(data)
    })
})

p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./输出内容2.md',(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./输出内容3.md',(err,data)=>{
            value.push(data)
            resolve(value)
        })
    })
}).then(value=>{
    console.log(value.toString())
})