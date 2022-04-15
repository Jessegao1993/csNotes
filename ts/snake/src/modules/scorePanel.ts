//定义score-panel类
class ScorePanel{
    score:number = 0;//分数
    level:number = 1;//等级
    scoreEle:HTMLElement;//分数所在元素
    levelEle:HTMLElement;//等级所在元素
    maxLevel:number;//限制等级
    upScore:number;// 设置满足升级的条件

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //加分方法
    addScore(){
        this.score++;
        this.scoreEle.innerHTML = this.score+'';
        // 每满十分升级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 升级方法,加分控制升级
    levelUp(){
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level+'';
        }  
    }
}

export default ScorePanel;