//Assignment Question

//Q1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
    console.log(arr[i]);
}

//Q2
let number = 287152;
let count = 0;

let temp = number;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}
console.log(count);

//Q3
let nums = 287152;
let sum = 0;
let tem = nums;
while (tem > 0) {
    digit = tem % 10;
    sum += digit;
    tem = Math.floor(tem / 10);
}
console.log(sum);

//Q4
let n = prompt("Enter the value of n: ");
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(`Factorial of ${n} is ${fact}`);

//Q5
let array = [7, 5, 4, 9, 1, 3, 6];
let large = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
        large = array[i];
    }
}
console.log(`Large number is : ${large}`);