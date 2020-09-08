/**
 * @description:  
 * @modifyContent:
 * @author: lala
 * @date: 2020-09-06 13:36:57
*/
class Bird extends Square {
   constructor(width, height, left, top, speed, domEl) {
      super(width, height, left, top, speed, domEl);
      this.maxTop = gameHeight - landHeight - height;
   }
   // 小鸟振翅动画
   flyAnimateOpen(speed) {
      let self = this;
      this.timer = setInterval(() => {
         self.domEl.classList.remove();
      }, speed || 30);
   }
   // 小鸟碰撞到大地后结束动画
   flyAnimateEnd() {
      clearInterval(this.timer);
   }
   // 每次点击起跳方法
   jump() {
     this.top -= 20;
     this.speed -= 200;
     this.render()
   }
   // 重写方法，加速度
   move(acc) {
      this.speed += 2 * acc;
      this.top = this.speed;
      // 边界值判断
      if(this.top <= 0){
         this.top = 0;
      }
      if(this.top >= gameHeight - landHeight - birdHeight){
         this.top = gameHeight - landHeight - birdHeight;
      }
      if(this.speed >= 200){
         this.speed = this.top 
      }
      if(this.speed <= 100){
         this.speed = 100;
      }
   }
}


// setInterval(()=>{
//    b.move(4);
//    b.render();
// },20)