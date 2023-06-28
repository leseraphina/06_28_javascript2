class User{
  constructor(first,last){
    this.first = first;
    this.last = last;
  }
  getCall(){
    document.write(`
    <p>${this.first} : ${this.last}</p>`)
  }
}

const myName = [ 
                new User('red','lee'),
                new User('blue','kim'),
                new User('pink','park') ];

for(let i of myName){
  i.getCall();
}