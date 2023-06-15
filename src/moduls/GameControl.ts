//游戏控制器 ，控制其他的所有类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    // 创建一个属性记录蛇的移动方向
    direction:string = ''
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 调用run方法
        this.run()
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){

        this.direction = event.key;

    }

    // 创建一个控制蛇移动的方法
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            // 上
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
               // 下
            case "ArrowDown":
            case "Down":
                Y +=10;
                break;
                // 左
            case "ArrowLeft":
            case "Left":
                X -=10;
                break;
                // 右
            case "ArrowRight":
            case "Right":
                X +=10;
                break;

        }

        //检查蛇是否吃到食物
        this.checkEat(X,Y)

        //修改蛇的XY值
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            alert(e);
            this.isLive = false
        }

    //    开启一个定时器调用
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)

    }

    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl;

