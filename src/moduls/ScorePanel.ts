class ScorePanel{
    // score和level 用来记录分数和等级
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //设置一个最大等级
    maxLevel:number
    //设置多少个积分升一级
    upScore:number

    constructor(maxLevel:number = 10,upScore:number=10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore(){
        // 使积分自增
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score%this.upScore ===0){
            this.LevelUp()
        }
    }

    // 提升等级的方法
    LevelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
