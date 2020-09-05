/**
 * @description:  小鸟、柱子、背景、地面。都可以看做为一个方块。
 * @modifyContent:
 * @author: lala
 * @date: 2020-09-05 16:12:38
*/ 
class Square {
   constructor(width, height, left, top, speed,domEl) {
      this.width = width;
      this.height = height;
      this.left = left;
      this.top = top;
      this.speed = speed;
      this.domEl = domEl;
   }

   // 通用方法 移动
   move(){
      this.left += this.speed;
      if(this.rebase){
         this.rebase();
      }
   }
   // 渲染方法
   render(){
      this.domEl.style.left = this.left + "px";
      this.domEl.style.top = this.top + "px";
   }
  
}