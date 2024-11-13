//! Class Component

class User {
    constructor(_name, surName, age, email) {
        this.name = _name;
        this.surName = surName;
        this.age = age;
        this.email = email;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.age}.`);
      }
    #privateMethod(){
        console.log("This is a private method.");
    }
}
let newUser = new User("Yunis", "Qulamov", 19);
console.log(newUser);
//? When you type this code, you will see that email is undefined.
console.log(newUser.introduceSelf());
//? console.log(newUser.#privateMethod()); This will give an error because it is a private method. This method only can be used in the another method or in the class.

// Let' think that we want to create a new class with sae parameter as User but we want to add new parameters to it. If we want to do this, we can use super() method.
class User2 extends User {
    constructor(name, surName, age, email, car, brand){
        super(name, surName, age, email);
        this.car = car;
        this.brand = brand;
    }
}
let newUser2 = new User2("Yunis", "Gulamov", 19, "salam@gmail.com", "BMW", "M5");
console.log(newUser2);

class Rectangle {
    constructor(_width, _height){
        this.width = _width;
        this.height = _height;
        this.numberOfRequests = 0; 
    }
    get area(){
        this.numberOfRequests++;
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}
//? We can use get keyword method to initialize our function with name.
let newRectangle = new Rectangle(10, 5);
console.log(newRectangle.area);
console.log(newRectangle.area);
console.log(newRectangle.area);
console.log(newRectangle.numberOfRequests);