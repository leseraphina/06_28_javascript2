//  배열 구조분해 할당

const color = ['red','blue','green'];
const [a,b] = color;
console.log(a);
console.log(b);

const color1 = ['red','blue','green','gray','pink'];
const [c1,,c2 ] = color1;
console.log(c1);
console.log(c2);

const color2 = ['red','blue','green','gray','pink'];
const [,d1,d2,,d3] = color2;
console.log(d1);
console.log(d2);
console.log(d3);

const all = ['a1','a2','a3'];
const [i,c,d,e="data"] = all;
console.log(i);
console.log(c);
console.log(d);
console.log(e);