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

class User {
    static sum(a,b){
        console.log(a+b)
    }
    divide(a,b){
        console.log(a/b)
    }
}
let newUser = new User()
newUser.sum(5,2)
