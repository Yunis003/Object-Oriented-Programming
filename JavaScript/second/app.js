// class User {
//     constructor(_name, _surName, _age, _email){
//         this.name = _name;
//         this.surName = _surName;
//         this.age = _age;
//         this.email = _email;
//     }
//     get fullName(){
//         return this.name
//     }
//     set fullName(value){
//         return this.name = value;
//     }
// }
// let newUser = new User('Yunis', 'Gulamov', 19);
// console.log(newUser.fullName);
// newUser.fullName = 'Seymur'
// console.log(newUser.fullName);
// console.log(Object.getPrototypeOf(newUser)); // Yaradilan deyerin tipinin ne oldugunu qaytarir


//! STATIC METHODS

// class User {
//     static sum(a,b){
//         console.log(a+b)
//     }
//     divide(a,b){
//         console.log(a/b)
//     }
// }
// let newUser = new User()
// User.sum(5,2)

class Persons{
    constructor(name){
        this.name = name;
        console.log(this.name)
    }
    static checkLength(data){
        if (data.length <= 5){
            console.log('err')
        }else{
            console.log('ok')
        }
    }
    static checkWordCount(data){
        const dataLength = data.split(' ');
        for(let i = 0; i < dataLength.length; i++){
            if (i < 2){
                console.log('err')
            }else{console.log('ok')}
        }
    }
    static setChange(name){
        console.log('Salam' + ' ' + name)
    }
}
let person1 = new Persons("Yunis")
let person2 = new Persons("Telman")
Persons.setChange("Yunis")
Persons.checkWordCount('Salam salam salam')



