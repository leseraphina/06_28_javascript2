const fruit = {
  color:'red',
  name:'apple',
  price:1000
}
//  등록

const str = JSON.stringify(fruit);
console.log(str);
localStorage.setItem('fruit',str);

//  가져오기
const num = localStorage.getItem('fruit');
console.log(num);
const str2 = JSON.parse(num);
console.log(str2);

document.write(
  `
  <dl>
  <dt>${str2.name}</dt>
  <dd>${str2.color}</dd>
  <dd>${str2.price}</dd>
  </dl>
  `
);

localStorage.removeItem('color');
localStorage.clear();
// 25