class Book{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  getBook(){
    document.write(`<p>${this.name} - ${this.type}</p>`)
  }
}

const myBook = [
  new Book('book01','all'),
  new Book('book02','all'),
  new Book('book03','all')
]
class It extends Book{
  constructor(name,type,level){
    super(name, type);
    this.level = level
  }

  getCall(){
    document.write(`
      <p>${this.name} - 
          ${this.type} - 
          ${this.level
    }</p>`)
  }
}
const myIt = [new It('html','인터넷','1')
              ,new It('javascript','개발','2')
              ,new It('react','앱개발',3)]

for(let i in myBook){
  myBook[i].getBook();
}
for (let i in myIt){
  myIt[i].getCall();
}

//  33 - 43