const color = {
  title:'red',
  sample:'apple',
  no:123
}

console.log(color)

// 일반적인 값, 객체 -> JSON, TEXT화
const str = JSON.stringify(color);
console.log(str)

// JSON -> 일반적인 값, 객체
const obj = JSON.parse(str);
console.log(obj);