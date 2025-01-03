class Card{
    constructor(name, surName, balance){
        this.name = name;
        this.surName = surName;
        this.balance = balance;
    }
    writeInfo(){
        alert(`Name: ${this.name} Surname: ${this.surName} Total: ${this.balance} AZN`)
    }
}
let element = localStorage.getItem('userInfo').split(',')
let name = element[0];
let surName = element[1]
let balance = Math.round(41*0.2).toFixed(2);
let newCard = new Card(name, surName, balance);
newCard.writeInfo();