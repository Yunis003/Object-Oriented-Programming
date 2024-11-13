//! Basics of Classes

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
let newUser2 = new User2("Yunis", "Gulamov", 19, "salam@gmail.com", "BMW", "M5"); //instance-dir bu yeni yaratdigimiz deyer, yeni konstruktor funksiyasinin komeyi ile yaratdigimiz obyekt.
console.log(newUser2);

//! Getters and Setters
console.log("-----Getters and Setters-----");

class Rectangle {
    constructor(_width){
        this.width = _width;
        this.height = _width;
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
//? We use get and set method to get and set the area of the rectangle.
let newRectangle = new Rectangle(20);
newRectangle.area = 900;
console.log(newRectangle.width);
console.log(newRectangle.height);
console.log(newRectangle.area);
console.log(newRectangle.area);
console.log(newRectangle.area);
console.log(newRectangle.numberOfRequests);

//! Static Methods
console.log("-----Static Methods-----");

class Rectangle2 {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    static equals(a, b){
        return a.width * a.height == b.width * b.height;
    }
    static isEqualToEachOther(width, height){
        return width == height;
    }
}
let rectangle1 = new Rectangle2(10);
let rectangle2 = new Rectangle2(10);
//? In this case we use static method to compare two rectangles. Statik metoddan istifade etdiyimiz ucun burada birbasa classin adi ile metoda muraciet ederek 2 deyeri bir biri ile muqayise edirik.
//? statik metodlar komekci funksiyalardir ve onlarin obyektlerine muraciet etmek ucun obyekt yaratmaq lazim deyil. 
console.log(Rectangle2.equals(rectangle1, rectangle2));
console.log(Rectangle2.isEqualToEachOther(10, 20));

//! Inheritance
console.log("-----Inheritance-----");

class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    call(){
        console.log("My name is " + this.name);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _language){
        super(_name, _age);
        this.language = _language;
    }
    code(){
        console.log(`${this.name} is coding in ${this.language}`);
    }
}
//? Bu tam olaraq inheritance olaraq adlandirilir. Bir classin diger classdan miras almasi. super() metodundan istifade edilir ve lazimi elave deyerin yaradilmassinda istifade edirik.
//? Burada Person classinda olan butun metodlari(funksiyalari) child classinda istifade ede bilerik. Lakin eksi mumkun deyildir. Programmmer Persondan extends olub cunki :)
let newProgrammer = new Programmer("Yunis", 19, "Python");
newProgrammer.call();
console.log(newProgrammer);

//? Burada olan programmer classindan istifade ederek arrayimizin daxilinde elementlerimizi yaratdiq. Adi deyer assign etdiyimizde oldugu kimi, arrayinda daxiline saliriq ve o classin daxilinde olan metodlarida rahat sekilde for loopu ile elementlere tetbiq edirik
const programmers = [
    new Programmer("Yunis", 19, "C"),
    new Programmer("Elvin", 20, "Python")
]
function displayProgrammers(programmers){
    for (let i = 0; i < programmers.length; i++) {
        programmers[i].code();
    }
}
displayProgrammers(programmers);

//! Polymorphism
console.log("-----Polymorphism-----");

class Animal {
    constructor(_name){
        this.name = _name;
    }
    animalSound(){
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    constructor(_name){
        super(_name);
    }
    animalSound(){
        super.animalSound();
        console.log("Woof Woof Woof!");
    }
}
let animal1 = new Animal("Jeff");
let animal2 = new Dog("Rex");
animal1.animalSound();
animal2.animalSound(); //? Bu zaman Dog classinda olan metod isleyecek cunki kodu run edende birinci extends olana baxir eger o metod onun daxilinde varsa onu calisdirir yoxduras parentine baxir ve ordakini isledir. Bu ise polymorphismdir.


//! Practice

let lists = document.querySelector(".lists-container");

class List {
    constructor(list){
        this.list = list;
        this.listsArray = [
            "Amir",
            "Yunis",
            "Elvin",
            "Elchin"
        ];
    }
    addElement(list){
        let li = document.createElement("li");
        li.textContent = list;
        lists.appendChild(li);
    }
    removeElement(index){
        this.listsArray.splice(index, 1);
    }
}

let newList = new List();
newList.listsArray.forEach(element => { 
    lists.innerHTML += `<li>${element}</li>`;
})
newList.addElement("samir");
