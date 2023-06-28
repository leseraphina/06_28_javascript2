const num = {
  a1 : 10,
  a2 : 20,
  a3 : 30
}

console.log(num.a1);

//  const 객체이름 = { b1:, b2:, b3:, b4:, b5: b6:}
// const {b1:b1,b2:b2,b3:b3}
const {b1,b2,b3} ={
  b1:10,
  b2:20,
  b3:30
}
console.log(b2);
// console.log(객체.b1)
// b2 = 'love'; 할당연산자 사용을 하지는 않는다.

const book = {
  title:'javascript',
  type:'it'
}
const {title} = book;
console.log(title);

const no = {
  a1:[0,1,2,3,4,5],
  a2:[2,3,4,5],
  a3:[0,2,3,4],
  a4:[0,1,3,4,5],
  a5:[0,1,3,4]
}

console.log(no['a1'])
const {a1,a4} = no;
console.log(a1);

// 42 - 30