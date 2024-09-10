//Practice C1-Q1

let age = 23;
age + 2;
console.log(age);

//Practice C1-Q2

let math = 90;
let phy = 80;
let bangla = 100;
let avg = (math + phy + bangla) / 3;
console.log(avg);

//Practice C1-Q3

let num = 5;
let newNum = num++;
newNum = ++num;
console.log(newNum);

//Practice C1-Q3

let name = "Kowsar Hossain";
console.log(name.length);

let firstName = "kowsar";
console.log(firstName[0]);
console.log(firstName[5]);

let fName = "apnacollege";
let lName = 123;
console.log(fName + lName);

let empty = "";
console.log(empty.length);
let space = " ";
console.log(space.length);

//Template Literals

let pencil = 10;
let pen = 5;
console.log(`The total price is : ${pencil+pen} taka`);

// Conditional Statement

console.log(`Before my if statement`);
let ages = 17;
if (ages >= 18) {
    console.log(`You can vote`);
    let a = 5;
    console.log(a * 5);
} else {
    console.log(`You connot vote`);
}
console.log(`Before my if statement`);

//Practice C2-Q1
//Traffic light System

let color = "red";
if (color == "red") {
    console.log("STOP");
} else if (color == "yellow") {
    console.log("SLOW DOWN");
} else {
    console.log("GO");
}

//Practice C2-Q2

let size = "L";
if (size == "XL") {
    console.log(`Price is Rs. 250`);
} else if (size == "L") {
    console.log(`Price is Rs. 200`);
} else if (size == "M") {
    console.log(`Price is Rs. 100`);
} else {
    console.log(`Price is Rs. 50`);
}


//Practice C2-Q3

let str = "apple";
if (str.length >= 3 && str[0] == "a") {
    console.log('Good String');
} else {
    console.log(`Not Good string`);
}


//Practice C2-Q3

let day = 4;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Munday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong day");
}

//Alert & Prompt

//alert("something is wrong");
// console.log("Simple msg");
// console.error("This is an error msg");
// console.warn("This is a warning msg");

// let firstNames = prompt("Enter your name :");
// console.log(firstNames);


//Assignment solution Q1

let number = 12890;
if (number % 10 == 0) {
    console.log("Good");
} else {
    console.log("Not Good");
}

//Assignment solution Q2

let names = prompt("Please enter your name");
let ag = prompt("Please enter your age");

alert(`${names} is ${ag} years old`);

//Assignment solution Q3

let month = 2;
switch (month) {
    case 1:
        console.log("January,February, March");
        break;
    case 2:
        console.log("April,May,june");
        break;
    case 1:
        console.log("July,August, September");
        break;
    case 4:
        console.log("October,November, December");
    default:
        console.log("Its not any Quater");

}