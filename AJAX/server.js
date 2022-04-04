//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX-2');
});

// app.post('/server', (request, response)=>{
//     //设置响应头，允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     //设置响应体
//     response.send('HELLO AJAX');
// });

app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
     //设置响应体
    response.send('HELLO AJAX');
});

app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data = {
        name:'atguigu'
    } 
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});

//针对IE缓存的规则
app.get('/ie', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO IE-4');
});
//延时响应
app.get('/delay', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        //设置响应体
    response.send('延时响应');
    },3000)  
});
//jquery服务
app.all('/jquery-server', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
        //设置响应体
    response.send('Hello jQuery AJAX'); 
});
//axios服务
app.all('/axios-server', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
        //设置响应体
    response.send('Hello Axois AJAX'); 
});
//fetch服务
app.all('/fetch-server', (request, response)=>{
    //设置响应头，允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

        //设置响应体
    response.send('Hello Axois fetch'); 
});
//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});