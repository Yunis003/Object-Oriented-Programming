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
        this.cart.push({product, quantity});
    }
    viewCart(){
        console.log(`${this.name}'s Cart:`)
        let totalMoney = 0;
        this.cart.forEach((item)=>{
            console.log(`Product : ${item.product.name}, Price: ${item.product.price}, Quantity: ${item.quantity}`);
            totalMoney += item.product.price * item.quantity;
        })
        console.log('Total fie is: ' + totalMoney);
    }
}
class Order{
    constructor(customer){
        this.customer = customer;
        this.items = []
        this.totalPrice = 0;
    }
}
class Store{
    constructor(name){
        this.name = name;
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product){
        this.products.push(product);
    }
    registerCustomer(customer){
        this.customers.push(customer);
    }
    listProducts(){
        this.products.map((product)=>console.log(product)).join(", ");
    }
    listOrders(){
        this.orders.map((order)=>console.log(order)).join(", ");
    }
}

const store = new Store("Market");

// Add Products
const laptop = new Product("Laptop", 1000, 10);
const smartphone = new Product("Smartphone", 500, 20);
const headphones = new Product("Headphones", 100, 50);
store.addProduct(laptop);
store.addProduct(smartphone);
store.addProduct(headphones);

// Register Customers
const alice = new Customer("Alice", "alice@example.com");
store.registerCustomer(alice);

// Add to Cart
alice.addToCart(laptop, 1);
alice.addToCart(smartphone, 2);
alice.viewCart();

// Place Order
const order1 = new Order(alice);
order1.placeOrder();
store.orders.push(order1);

// List Products after Order
store.listProducts();

// List Orders
store.listOrders();