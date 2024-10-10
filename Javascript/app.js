//Objects Literals
const student = {
    name: "Kowsar",
    age: 23,
    gender: "Male",
    marks: 94.4,
    city: ["Rajshahi", "Sirajgonj"]
};
console.log(student);
console.log(student["city"]);
student.marks = "Dhaka";
console.log(student.marks);
console.log(student.gender);

const obj = {
    1: "mango",
    2: "Banana",
    null: "C",
    true: "A"
};
console.log(obj);
console.log(obj["1"]);

//Object of Objects
const classInfo = {
    Aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    Karan: {
        grade: "0",
        city: "Mumbai"
    }
};
console.log(classInfo);
console.log(classInfo.Karan["grade"]);


//Array of Objects

const studentInfo = [{
    name: "aman",
    grade: "A+",
    city: "Delhi"
}, {
    name: "Shradha",
    grade: "A",
    city: "Pune"
}, {
    name: "Karan",
    grade: "0",
    city: "Mumbai"
}];
console.log(studentInfo);

//Random Integer

let rand = Math.random();
rand = rand * 10;
rand = Math.floor(rand);
rand = rand + 1;
console.log(rand);

console.log(Math.floor(Math.random() * 10) + 1); //Create arandom integer number

//Practice Question-Q1
console.log(Math.floor(Math.random() * 100) + 1);

//Practice Question-Q2
console.log(Math.floor(Math.random() * 5) + 1);

//Guess Game
const max = prompt("Enter your guessing number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess your number");
while (true) {
    if (guess == "quit") {
        console.log("User Quit !!");
        break;
    }
    if (guess == random) {
        console.log(`You are Right !! Random value is : ${random}`);
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small !!! Try another one");
    } else {
        guess = prompt("Your guess was too large !!! Try another one");
    }
}