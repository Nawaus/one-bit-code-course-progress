class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    removeToStock(quantity) {
        this.inStock -= quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const computer = new Product('Computer', 'high', 500)

computer.addToStock(10)
computer.addToStock(50)
computer.removeToStock(20)

console.log(computer);
console.log(computer.calculateDiscount(10));