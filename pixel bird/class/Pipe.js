/**
 * @description:  
 * @modifyContent:
 * @author: lala
 * @date: 2020-09-06 13:36:46
*/
class Pipe extends Square {
   constructor(width, height, left, top, speed, domEl) {
      super(width, height, left, top, speed, domEl);
   }

   /**
    * @description: 根据type初始化不同位置的水管，可能在上面，可能在下面。 
    * @author: lala
    * @date: 2020-09-06 14:16:51
   */
   initDom(type) {
      this.domEl = document.createElement("div");
      // 样式初始化
      this.domEl.style.position = "absolute";
      this.domEl.style.background = "url(./img/s2.png)";
      this.domEl.style.width = this.width + "px";
      this.domEl.style.height = this.height + "px";
      this.domEl.style.left = this.left + "px";
      //根据不同的类型，更改样式位置。
      if (type == "up") {
         this.domEl.style.top = `0px`;
         this.domEl.style.backgroundPosition = `174px ${56 + this.height}px`;
      }
      if (type == "down") {
         this.domEl.style.bottom = 135 + "px";
         this.domEl.style.backgroundPosition = "118px 376px";
      }
   }
   // 销毁方法
   destroy() {
      this.domEl.remove();
   }
}

let gap = 150;// 每对水管的之间的间隙
// 一对水管
// 水管背景图高度为280px
class Pipes {
   constructor(width, left, speed) {
      // 随机生成高度
      let randomHeight = Math.random() * (gameHeight - landHeight - gap);
      while (randomHeight < 100 || randomHeight > 280) {
         randomHeight = Math.random() * (gameHeight - landHeight - gap);
      }
      // 根据随机生成的高度，计算出每对每根水管的高度。
      let pipeUpHeight = randomHeight,
         pipeDownHeight = gameHeight - landHeight - gap - randomHeight;
      // 创建一对水管   
      this.pipeUp = new Pipe(width || 48, pipeUpHeight, left || 500, 0, speed);
      this.pipeDown = new Pipe(width || 48, pipeDownHeight, left || 500, 0, speed);
   }

   // 初始化水管
   initPipe() {
      this.pipeDown.initDom("down");
      this.pipeDown.top = getComputedStyle(this.pipeDown.domEl).top;
      this.pipeUp.initDom("up");
      this.pipeUp.top = getComputedStyle(this.pipeUp.domEl).top;
      return this;
   }

   // 将这一对水管插入到游戏中
   insertPipesInto(gameDom) {
      gameDom.appendChild(this.pipeDown.domEl);
      gameDom.appendChild(this.pipeUp.domEl);
      return this;
   }
   // 移动一对水管
   allMove() {
      this.pipeDown.move("x");
      this.pipeUp.move("x");
      return this;
   }
}

let pipes = new Pipes(48, 250, -3.5);
let gameBox = document.getElementsByClassName("game-box")[0];


