class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    reduceStock(amount){
        this.quantity -= amount;
    }
    increaseStock(amount){
        this.quantity += amount;
    }
}
class Customer{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.cart = [];
    }
    addToCart(product, quantity){
        if (this.cart.find(()=>{ })){
            quantity += 1;
        }else{
            this.cart.push(product);
        }
    }
    viewCart(){
        this.cart.forEach((product)=>{
            console.log(product)
        })
    }
}

class Order{
    constructor(totalPrice){

    }
}

class Store{
    constructor(){

    }
}