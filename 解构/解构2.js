let obj = {
   one: {
      inner: "My name is a"
   },
   arr: [45, 2, 66, { name: "lala" }],
   age: 88
}
let { one: { inner }, arr } = obj;
console.log(inner);

function sayELName(...arr){
   arr.forEach((p,i)=>{
      console.log(`This is arguments ${i} ${p}`);
   })
}

sayELName(...arr);