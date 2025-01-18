//forEach
let arr = [1, 2, 3, 4, 5];

let fun = function(el) {
    console.log(el)
};
arr.forEach(fun); //By function name

arr.forEach(function(el) {
    console.log(el) //By function defination
});

arr.forEach((el => {
    console.log(el) //By arrow function
}));

//Using Object
let obj = [{
        name: "kowsar",
        marks: 95
    },
    {
        name: "Manik",
        marks: 85
    },
    {
        name: "Rabby",
        marks: 78
    }
];

obj.forEach((student) => {
    console.log(student.name)
});

//map
let array = [1, 2, 3, 4];

let double = array.map((el) => {
    console.log(el * 2) //Return a same size array
});

let gpa = obj.map((el) => {
    console.log(el.marks / 10)
});

//Filter
let nums = [2, 1, 3, 4, 6, 8, 7, 10, 11];
let ans = nums.filter((el) => {
    return (el % 2 == 0)
});
console.log(ans);

//Reduce
let number = [1, 2, 3, 4];
let result = number.reduce((res, el) => (res + el));
console.log(result);

//Finding maximum in a array
let n = [3, 5, 6, 8, 4, 12, 32, 43, 24, 41];

let max = n.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(max);

//Practice Question
//Q-1
let mul = [20, 84, 90, 50];
let check = mul.every((el) => {
    return el % 10 == 0
});
console.log(check);

//Spread
let arrays = [3, 4, 5, 3, 2, 5, 7, 9, 8];
console.log(...arrays);
console.log(...
    "kowasrhossain");

//Object Literals
const data = {
    email: "kowsar143@gmail.com",
    password: "abcd",
};
console.log(data);
const dataCopy = {...data, id: 123 };