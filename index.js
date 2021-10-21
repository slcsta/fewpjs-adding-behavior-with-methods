// Your code here
// for each class, create the method speak

class Cat {
    //...for an instance of Cat, speak returns "name says meow!"
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    //...for an instance of Dog, speak returns "name says woof!"
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    //...
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    speak() {
        if(this.gender === "male"){
            return `It's me! ${this.name}, the parrot!`;
    
        } else return `${this.name} says squawk!`;
    }
  }