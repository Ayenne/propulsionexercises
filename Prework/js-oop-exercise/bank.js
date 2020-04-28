class Bank{
    constructor() {
        this.customers = {};
    }
    addCustomer(customerName) {
        this.customers[customerName] = 0;
    }
    printAccount(customerName) {
        console.log(`${customerName} account is ${this.customers[customerName]}`)
    }
    printAll(){
        Object.keys(this.customers).forEach(key => {
            console.log(`${key} account is ${this.customers[key]}`);
        })
    }
    deposit(customerName, amount) {
        this.customers[customerName] += amount;
    }
    withdraw(customerName, amount) {
        if (this.customers[customerName] < amount) {
            console.log('Insufficient funds');
        } else {
            this.customers[customerName] -= amount;
        };
    }
}
const bank = new Bank();
bank.addCustomer('Sheldon');
bank.printAccount('Sheldon');
bank.deposit('Sheldon', 10);
bank.printAccount('Sheldon');
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldon'); 
bank.printAccount('Raj')
bank.withdraw('Sheldon', 20);
bank.printAll();
