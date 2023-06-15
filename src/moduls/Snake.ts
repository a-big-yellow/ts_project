

class Snake{
    // 蛇头
    head:HTMLElement;
    //蛇身
    bodies:HTMLCollection;
    //蛇容器
    element:HTMLElement;

    constructor() {
        this.head = document.querySelector("#snake > div")!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')

    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set  X(value){

        if(this.X === value){
            return;
        }

        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else {
                value = this.X + 10;
            }
        }

        this.moveBody()
        this.head.style.left = value + "px";
    }

    set Y(value){

        if(this.Y === value){
            return;
        }

        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else {
                value = this.Y + 10;
            }
        }

        this.moveBody()
        this.head.style.top = value + "px";
        this.checkHeadBody()
    }

    addBody(){
    //    向蛇容器内添加div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }



    moveBody(){
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取蛇各部位的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 给各部位赋值
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }

    checkHeadBody(){
    //    获取所有身体检查是否与蛇头坐标发生重叠
        for(let i=1; i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了')
            }
        }
    }

}

export default Snake;
