const Shape = require('./Shape')
class Rectangle extends Shape{
    constructor(width,heigt){
        super(width,heigt);
    }
    calculateArea(){
        return this.width * this.height
    }
}