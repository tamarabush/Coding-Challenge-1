// Task 1: Variables and Data Types

let employeeName = "Lana Del Rey";
const employeeID = 90210;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compund Data Types

let products =["Candle", "Lightbulb", "Plants"] 

const productDetails = {
        price: 10.00,
        name: products,
        inStock: 150,
}

console.log(products, productDetails);



// Task 3: Assignment Operators 

let accountBalance = 8500;

accountBalance += 450;
accountBalance -= 200;
accountBalance *= 2;
accountBalance /= 2;
accountBalance %= 9;

console.log(accountBalance);



// Task 4: Comparison Operators 

let employeeScore1 = 1078
let employeeScore2 = 982

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);



// Task 5: Logical Operators 

let hasKeyCard = true;
let hasPermission = false;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);
