// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     sayHi(){
//         console.log("Hi Typescript")
//     }
// }

// const jesse = new Person("jesse",30)
// jesse.sayHi()
//接口:定义类（对象）的时候限制其结构，定义一个类中应该包含哪些属性和方法，可重复声明，接口中所有属性都没有实际值，方法都是抽象方法
// interface myinter{
//     name:string
//     age:number
//     sayHi():void
//     run():void
// }
//定义类时实现接口
//父类 使用抽象类使它只具备被继承的功能而不能直接实例化
// abstract class Animal implements myinter{//使用抽象类使它只具备被继承的功能而不能直接创建对象
abstract class Animal{
    private _name:string
    private _age:number
    constructor(name:string,age:number){
        this._name=name
        this._age=age
    }
    abstract sayHi():void//抽象方法。只定义结构，具体由对象定义,对象必须对它重写
    
    run(){
        console.log(`${this.name} is running..`)
    }

    //获取内部属性
    // getName(){
    //     return this.name
    // }
    //ts的getter方法
    get name(){
        return this._name
    }
    //ts的setter方法
    set name(val:string){
        this._name = val
    }
    //修改内部属性
    // setName(val:string){
    //     this._name = val
    // }
}
//子类
class Dog extends Animal{
   //子类中的构造函数必须对父类的构造函数调用
    // name: string
    // age:number
    // constructor(name: string,age:number){
    //     super(name,age)
    //     this.name=name
    //     this.age=age
    // }
    sayHi(){//方法的重写
        console.log("wangwang")
    }
}
class Cat extends Animal{
    sayHi(){//方法的重写
        console.log("miaomiaomiao")
    }
   run(){
       super.run()//调用当前类的父类
   }
}
//实例
// const dog = new Dog("Adam",5)
// dog.sayHi()
const cat = new Cat("Bob",3)//属性在对象中设置可以被任意修改有安全风险，可在类中属性前加private修饰符，再添加方法使得私有属性可被外部访问
//cat.name = 'candy'
console.log(cat.name)//调的是方法，用起来和属性一样
cat.run()