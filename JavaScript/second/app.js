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

//! another task
// class Persons{
//     constructor(name){
//         this.name = name;
//         console.log(this.name)
//     }
//     static checkLength(data){
//         if (data.length <= 5){
//             console.log('err')
//         }else{
//             console.log('ok')
//         }
//     }
//     static checkWordCount(data){
//         const dataLength = data.split(' ');
//         for(let i = 0; i < dataLength.length; i++){
//             if (i < 2){
//                 console.log('err')
//             }else{console.log('ok')}
//         }
//     }
//     static setChange(name){
//         console.log('Salam' + ' ' + name)
//     }
// }
// let person1 = new Persons("Yunis")
// let person2 = new Persons("Telman")
// Persons.setChange("Yunis")
// Persons.checkWordCount('Salam salam salam')

//!another simple task

// class Book{
//     constructor(title, author, pages, isRead){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.isRead = isRead;
//     }
//     getSummary(){
//         console.log(`The book ${this.title} by ${this.author} has ${this.pages} pages`)
//     }
//     toggleReadStatus(){
//         this.isRead = !this.isRead;
//         console.log(this.isRead)
//     }
// }
// const newBook = new Book('Animal Literature', 'George Orwell', 328, false);
// console.log(newBook);
// newBook.getSummary()
// newBook.toggleReadStatus()
// newBook.toggleReadStatus()

//! another simple task

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log("Hi, my name is " + this.name + ", and I am " + this.age + " " + "years old.")
//     }
// }
// class Student extends Person{
//     constructor(name, age, grade){
//         super(name, age);
//         this.grade = grade;
//     }
//     introduce(){
//         super.introduce()
//         console.log(" " + "I am in grade" + this.grade + ".");
//     }
// }
// class Teacher extends Person{
//     constructor(name, age, subject){
//         super(name, age);
//         this.subject = subject;
//     }
//     introduce(){
//         super.introduce() 
//         console.log("I teach" + this.subject + ".");
//     }
// }
// const student = new Student("John", 17, 12);
// student.introduce();

// const teacher = new Teacher("Sarah", 30, "Mathematics");
// teacher.introduce();

//! another simple task

class BankAccount{
    constructor(accountHolder, balance = 0){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        balance += amount;
    }
    withdraw(amount){
        balance -= amount;
    }
    getBalance(){
        console.log(this.balance);
    }
}

class SavingsAccount extends BankAccount{
   constructor(interestRate = 0.05, balance){
    super(this.balance, this.deposit);
    this.interestRate = interestRate;
   }
   addInterest(interest){
    this.balance += interest;
   }
}
class CheckingAccount extends BankAccount{
    constructor(overdraftLimit = 0){
        this.overdraftLimit = overdraftLimit;
    }
}
const savings = new SavingsAccount("alice", 0, 0.1);
savings.deposit(1000);
console.log(savings.getBalance()); //1000





