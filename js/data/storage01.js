localStorage.setItem('book','javascript');

const color = {
  title:'red',
  sample:'apple',
  no:['no01','no02']
}

localStorage.setItem('color',color);
const str = JSON.stringify(color);
console.log(str);
localStorage.setItem('color',str);

// console.log(sample)
const obj = localStorage.getItem('color');
console.log(obj);
const str2 = JSON.parse(obj);
console.log(str2);
console.log(str2.sample)