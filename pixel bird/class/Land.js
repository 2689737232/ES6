class Land extends Square {
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
let land = document.getElementsByClassName("land")[0],
   landStyles = getComputedStyle(land),
   landWidth = parseFloat(landStyles.width),
   landHeight = parseFloat(landStyles.height),
   landLeft = parseFloat(landStyles.left),
   landTop = parseFloat(landStyles.top);

let l = new Land(landWidth, landHeight, 0, 565, -3, land);

setInterval(() => {
   l.move();
   l.render();
}, 20);