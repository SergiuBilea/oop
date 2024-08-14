function parinte () {
    this.firstName = "Sergiu";
    this.email = "sergiu@gmail.com";
}

function copil () {
    this.lastName = "Bilea";
    parinte.call(this);
}

const copil1 = new copil();
console.log(copil1);

function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.sayHello = function(){
        return `hello to ${this.firstName} ${this.lastName}`;
    }
}


const user1 = new User("Sergiu", "Bilea");
console.log(user1);
console.log(user1.fullName()); // Sergiu Bilea
console.log(user1.sayHello()); // hello to Sergiu Bilea

const user2 = new User("victor", "sulac");
console.log(user2)

function Customer (firstName, lastName, membership) {
    // User.call(this, firstName, lastName);
    User.apply(this, arguments);
    this.membership = membership;
    this.verifyMembership = function (){
        if(this.membership === true){
            return "you are a part of our team"
        }else{
            return"we dont know you"
        }
    }
}

const customer1 = new Customer("Victor", "Sulac", true);
console.log(customer1.verifyMembership())
console.log(customer1.fullName())
console.log(customer1.sayHello());

Customer.prototype.constructor = Customer;
Customer.prototype.gridMember = function(){
    if(this.membership === true) {
        return `hello ${this.firstName} ${this.lastName}`
    }
}
console.log(customer1.gridMember());