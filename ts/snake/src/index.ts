//引入样式
import './style/index.less'

//定义food类
class Food{
    //定义属性来表示食物对应的元素
    element:HTMLElement;
    constructor(){
        //获取页面food元素并赋值给element
        this.element = document.getElementById('food')!;
    }

    //获取食物X轴坐标
    get X(){
        return this.element.offsetLeft;
    }
    //获取食物Y轴坐标
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物位置
    change(){
        // 生成随机位置（0-290之间10的倍数，因为蛇一次移动一格（10px））
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left+'px';
        this.element.style.top = top+'px';
    }
}

// 测试代码
// const food = new Food();
// console.log(food.X,food.Y)
//food.change()