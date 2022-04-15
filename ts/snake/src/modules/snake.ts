class Snake{
    element:HTMLElement; // 蛇的容器
    head:HTMLElement;    // 表示蛇头的元素
    bodies:HTMLCollection; // 蛇的身体（包括蛇头）

    constructor(){
        this.element = document.getElementById('snake')!;// 获取蛇的容器
        this.head = document.querySelector('#snake>div') as HTMLElement;//获取蛇头
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')!;//获取蛇的身体（包括蛇头）
    }

    // 获取蛇头坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X(value:number){
        // 判断是否水平移动
        if(this.X===value){
            return;
        }
        // X是否越界 0-290
        if(value < 0 || value > 290){//越界
            throw new Error('蛇撞墙了');
        }

        // 禁止掉头
        if(this.bodies[1] && (this.bodies[1]as HTMLElement).offsetLeft === value){//存在身体并向左或右移动，坐标覆盖蛇头坐标
             console.log("diaotou")
            // 向反方向继续移动
            // if(value > this.X){//the snake turn when it goes right, it should go left
            //     value = this.X - 10;
            // }else{
            //     value = this.X + 10;
            // }
        }
        
        
        this.head.style.left = value + 'px'; //移动头
        this.moveBody()// 移动身体
         // 检查蛇是否撞到自己
        this.checkHeadBody();
    }

    set Y(value:number){
        // 判断是否垂直移动
        if(this.Y===value){
            return;
        }
        if(value < 0 || value > 290){//越界
            throw new Error('蛇撞墙了');
        }
        // 禁止掉头
        if(this.bodies[1] && (this.bodies[1]as HTMLElement).offsetTop == value){//存在身体并向上或下移动，坐标覆盖蛇头坐标
            // 向反方向继续移动
            if(value>this.Y){//the snake turn when it goes up, it should go down
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        
        this.head.style.top = value + 'px'; //移动头
        this.moveBody()// 移动身体
        // 检查蛇是否撞到自己
        this.checkHeadBody();
       
    }
    
    // 蛇增加身体
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    // 蛇移动身体
    moveBody(){
        // 将后边身体设置为前边身体的位置
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取前方身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 处理蛇是否撞到自己
    checkHeadBody(){
        // 获取所有身体
        for(let i=3;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){//撞到
                throw new Error('撞到自己');
            }
        }
    }
}

export default Snake;