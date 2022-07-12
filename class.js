'use strict';
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if (value<0){
            throw Error('age can`t be minus');
        }
        return this._age;
    }

   // methods
   speak(){
    console.log(`${this.name}:hello!`)
   }
}
const kim = new Person('kim',20);
console.log(kim.name);
console.log(kim.age);
kim.speak();
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
const rectangle = new Rectangle(20,20,'Blue');
console.log(rectangle.getArea());
rectangle.getArea();
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height)/2;}
}
const triangle = new Triangle(20,20,'Red');
console.log(triangle.getArea());