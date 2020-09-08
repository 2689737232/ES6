class Lala {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   sayHi() {
      console.log(`${this.name} say Hi!`);
   }
}
console.log("导入了lala模块");
// 默认导出
export default Lala;
//或者
// export { Lala as default };