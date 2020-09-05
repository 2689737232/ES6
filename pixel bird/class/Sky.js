/**
 * @description: Sky class 
 * @modifyContent:
 * @author: lala
 * @date: 2020-09-05 16:12:15
*/
class Sky extends Square {
   constructor(width, height, left, top, speed, domEL) {
      super(width, height, left, top, speed, domEL);
   }
   // 复位方法,用于移动背景，到底后重设left为0
   rebase() {
      if (Math.abs(this.left) == this.width / 2) {
         this.left = 0;
      }
   }
}


let sky = document.getElementsByClassName("background")[0],
   skyStyles = getComputedStyle(sky),
   skyWidth = parseFloat(skyStyles.width),
   skyHeight = parseFloat(skyStyles.height),
   skyLeft = parseFloat(skyStyles.left),
   skyTop = parseFloat(skyStyles.top);

let s = new Sky(skyWidth, skyHeight, 0, 0, -3, sky);

setInterval(() => {
   s.move();
   s.render();
}, 20)