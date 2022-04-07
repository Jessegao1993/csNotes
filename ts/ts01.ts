//ts可声明变量固定类型
let a:number
a = 10
//声明完变量直接赋值
let b:boolean = true

//可以指定函数返回值的类型
function sum(a:number,b:number):number{//此处指定
    return a+b;
}
//函数没有返回值可以写void
//function fn():void{}

//直接使用字面量进行类型声明，值不可修改
let c: 10
//联合类型
let d: boolean|string
//unknown类型变量不能直接赋值给其他变量
//类型断言可以用来告诉解析器变量的实际类型
//s=e as string或者s=<string>e

//指定对象中可以包含哪些属性
let obj:{name:string}
let obj2:{name:string,age?:number}//?可选属性

//指定函数结构
let e:(a:number,b:number)=>number

//指定数组
let f:string[]
let g:Array<number>

//元组：固定长度的数组 tuple