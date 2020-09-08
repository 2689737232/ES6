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


// setInterval(() => {
//    l.move("x");
//    l.render();
// }, 30);