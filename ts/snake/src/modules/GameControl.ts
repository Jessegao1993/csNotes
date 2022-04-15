//引入其他类
import Snake from "./snake";
import ScorePanel from "./scorePanel";
import Food from "./food";

class GameControl{//游戏控制器，控制所有类
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    direction:string='';// 存储蛇的移动方向
    isLive = true;// 记录游戏是否结束


    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    // 游戏初始化
    init(){
        // 绑定键盘按键按下事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));//this和bind的问题
        this.run();
        
    }

    // 键盘按下的响应函数
    keydownHandler(KeyboardEvent:any){
        // console.log(KeyboardEvent.key);
        //检查按的是否是方向键

        this.direction = KeyboardEvent.key;//当用户按下按键时，储存按键方向
    }

    //蛇移动：根据方向this direction移动元素,修改top和left
    run(){
        // 获取蛇当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据方向修改XY值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":   
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down": 
                Y += 10;  
                break;
            case "ArrowLeft":
            case "Left": 
                X -= 10;  
                break;
            case "ArrowRight":
            case "Right": 
                X += 10;  
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X,Y);

        // 修改蛇的XY
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e:any) {
            // 出现异常
            alert(e.message+'Game Over');
            // 游戏结束
            this.isLive = false;
        }

        // 开启定时调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30);//移动速度随级别升高而加快 
    }

    // 判断蛇是否吃到食物及处理方法
    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y){
            // 重置食物的位置
            this.food.change();
            // 分数要增加
            this.scorePanel.addScore();
            // 蛇身变长
            this.snake.addBody();
        }
    }
}

export default GameControl;