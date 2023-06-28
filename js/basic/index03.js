const book = {
  title:'javascript',
  type:'it'
  // ,level:1
}

const {title,level=0} = book;
console.log(title)
console.log(level);


//  키의 변경
const str = title;
console.log(str);
console.log(title);
// str = 'html'

const graphic = {
  no:'paint',
  title2:'photoshop'
}

const {no:art,title2} = graphic;
console.log(art);
// console.log(no);