//! INHERITANCE
// class Person{
//     name = 'Yunis'
//     getName(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
// class Human extends Person{
//     write(){
//         super.getName()
//     }
// }
// let newPerson = new Person();
// newPerson.getName()
// let newHuman = new Human();
// newHuman.write()

class Person{
    constructor(name, surName, age){
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    writeInfo(){
        console.log(this.name, this.surName, this.age)
    }
}
class Human extends Person{
    constructor(a, b, c){
        super(a, b, c);
    }
    writeInfo(){
        super.writeInfo();
    }
}
let newHuman = new Human('Yunis', 'Qulamov', 19);
newHuman.writeInfo()