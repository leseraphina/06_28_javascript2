class Rect{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  action(){
    return this.width * this.height;
  }
}

const myRect = new Rect(100,200);
console.log(myRect.action());

class NumPoly extends Rect{
  constructor(width,height,num){
    super(width, height);
    this.num = num;
  }
  action(){
    return this.width * this.height * this.num;
  }
}
const myPoly = new NumPoly(100, 300,3);
console.log(myPoly.action());
