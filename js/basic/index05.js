const fruit = ['app','orange','banana'];
console.log(fruit);
console.log(...fruit);
console.log(fruit[0],fruit[1],fruit[2])

function obj(a,b,c){
  // return {a:a,b:b,c:c}
  return {a,b,c}
}
console.log(obj(1,2,3));
console.log(obj(fruit))
console.log(obj(fruit[0],fruit[1],fruit[2]));
console.log(obj(...fruit));
//  나머지 한번 묶기
const word = [1,2,3,4,5,6,7];

// const myWork = function(a,b,c,...d){
//   return {a,b,c,d}
// }
// const myWork = (a,b,c,...d) =>{return {a,b,c,d}}
const myWork = (a,b,c,...d) =>  ({a,b,c,d}) ;
console.log(myWork(...word));