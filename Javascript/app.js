//this-keyword
const student = {
    name: "kowsar",
    age: "23",
    math: 95,
    phy: 86,
    chem: 93,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.phy + this.chem) / 3;
        console.log(`${this.name} got average marks =${avg}`);
    }
};

function getAvg() {
    console.log(this); //window object
}

//try catch
try {
    console.log(a);
} catch (err) {
    console.log("a is not defined");
    // console.log(err);
}

//Arrow function
const sum = (a, b) => {
    console.log(a + b);
};
sum(2, 3);

//Implicit function
const mul = (x, y) => (x * y);
mul(4, 5);

//practice Question
//Q-1
const square = (n) => (n * n);
square(5);

//Q-2
let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);

//Assignment Question
let arr = [1, 3, 5, 6, 7, 8];

const arrayAverage = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum / arr.length;
};
console.log(arrayAverage(arr));

//Q-2
const isEven = (n) => {
    if (n % 2 == 0) {
        return 'even';
    } else {
        return 'Not even';
    }
};
let n = 7;
console.log(isEven(n));