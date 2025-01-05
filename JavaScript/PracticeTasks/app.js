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

// Task: Create a "Bank Account" System

// class BankAccount{
//     constructor(accountHolder, balance = 0){
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         if (this.balance >= 0){
//             this.balance -= amount;
//             console.log(this.balance)
//         }
//         else{
//             console.log("There is not enough money in your bank account.");
//         }
//     }
//     getBalance(){
//         console.log("Your current balance is " + this.balance);
//     }
// }

// class SavingsAccount extends BankAccount{
//     constructor(accountHolder, balance, interestRate = 0.05){
//         super(accountHolder, balance);
//         this.interestRate = interestRate;
//     }
//     addInterest(){
//         this.balance += this.interestRate;
//     }
// }

// class CheckingAccount extends BankAccount{
//     constructor(accountHolder, balance, overdraftLimit = 0){
//         super(accountHolder, balance);
//         this.overdraftLimit = overdraftLimit;
//     }
//     withdraw(amount){
//         super.withdraw(amount);
//         console.log("After the withdrawing your balance is: " + this.balance)
//     }
// }

// const savings = new SavingsAccount("Alice", 0, 0.1);
// savings.deposit(1000);
// savings.getBalance();
// savings.addInterest();
// savings.getBalance();

// const checking = new CheckingAccount('Alice', 0,50);
// checking.withdraw(150);


//! another task

// Create a library system

// class Book{
//     constructor(title, author, isCheckedOut = false){
//         this.title = title;
//         this.author = author;
//         this.isCheckedOut = isCheckedOut;
//     }
//     checkOut(){
//         this.isCheckedOut = true;
//     }
//     checkIn(){
//         this.isCheckedOut = false;
//     }
//     getStatus(){
//         console.log(this.isCheckedOut == true ? "Book is checked out." : "Book is avaliable");
//     }
// }

// class Library{
//     constructor(name){
//         this.name = name;
//         this.books = [];
//     }
//     addBook(book){
//         this.books.push(book);
//     }
//     listBooks(){
//             this.books.forEach((book)=>{
//                 console.log(book.title + " " + book.author +  " " + (book.isCheckedOut ? 'Checked Out' : 'Avaliable'));
//             })
//     }
// }

// const library1 = new Library("City Book Center");

// const newBook1 = new Book("Harry Potter GPT", "J.K.Rovling", true);
// newBook1.checkIn();
// const newBook2 = new Book("Harry Potter Gemini", "J.K.Rovling", false);


// library1.addBook(newBook1);
// library1.addBook(newBook2);
// library1.listBooks()
// console.log(library1)

//! another task

// School management system

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log("Hello my name is " + this.name + " " + "and I am " + this.age + " " + "years old.");
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    study(){
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    teach(){
        console.log(this.name + " is teaching " + this.subject);
    }
}

class School{
    constructor(name){
        this.name = name;
        this.students = [];
        this.teachers = [];
    }
    addStudent(student){
        this.students.push(student);
    }
    addTeacher(teacher){
        this.teachers.push(teacher);
    }
    listPeople(){
        this.students.forEach((student, index)=>{
            console.log(`${index + 1} Student: ${student.name}`)
        })
        this.teachers.forEach((teacher, index)=>{
            console.log(`${index + 1} Teacher: ${teacher.name}`)
        })
    }
}

const student1 = new Student("Alice", 15, 10);
const student2 = new Student("Bob", 16, 11);
const teacher1 = new Teacher("Mrs. Smith", 35, "Math");
const teacher2 = new Teacher("Mr. Johnson", 40, "History");

const school = new School("Green Valley High");

school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(teacher1);
school.addTeacher(teacher2);

school.listPeople();

student1.introduce();
student1.study();    
teacher1.introduce();
teacher1.teach();    
