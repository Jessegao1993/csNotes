//定义类
class Person{
    
    //定义属性:直接定义的属性是实例属性，需要通过对象的实例访问；使用static开头的属性/方法是静态属性/方法（类属性/方法），可以直接通过类访问
    name:string = "jesse"
    static age:number = 30 //console.log(Person.age)
    readonly sex:string = "male"//只读属性不可修改
    //定义方法
    sayHello(){
        console.log("hello ts")
    }
}