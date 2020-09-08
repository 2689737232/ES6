/**
 * @description:  
 * @modifyContent:
 * @author: lala
 * @date: 2020-09-06 15:31:19
*/

let land = document.getElementsByClassName("land")[0],
   landStyles = getComputedStyle(land),
   landWidth = parseFloat(landStyles.width),
   landHeight = parseFloat(landStyles.height),
   landLeft = parseFloat(landStyles.left),
   landTop = parseFloat(landStyles.top),
   sky = document.getElementsByClassName("background")[0],
   skyStyles = getComputedStyle(sky),
   skyWidth = parseFloat(skyStyles.width),
   skyHeight = parseFloat(skyStyles.height),
   skyLeft = parseFloat(skyStyles.left),
   skyTop = parseFloat(skyStyles.top),
   bird = document.getElementsByClassName("bird")[0],
   birdStyles = getComputedStyle(bird),
   birdWidth = parseFloat(birdStyles.width),
   birdHeight = parseFloat(birdStyles.height),
   birdLeft = parseFloat(birdStyles.left),
   birdTop = parseFloat(birdStyles.top),
   gameHeight = document.getElementsByClassName("game-box")[0].clientHeight;

// 水管对之间的间隙
let pipesGap = 400;

class Game {
   constructor(speed) {
      this.speed = speed;
      this.land = new Land(landWidth, landHeight, 0, 565, -2, land);
      this.sky = new Sky(skyWidth, skyHeight, 0, 0, -2, sky);
      this.bird = new Bird(birdWidth, birdHeight, birdLeft, birdTop, 100, bird);
   }
   // 开始游戏
   startGame() {
      let self = this;
      this.timer = setInterval(() => {
         self.land.move("x");
         self.sky.move("x");
      }, 40)
   }
   // 停止游戏
   stopGame(){
      clearInterval(this.timer);
   }
}

let geme = new Game();
// geme.startGame();