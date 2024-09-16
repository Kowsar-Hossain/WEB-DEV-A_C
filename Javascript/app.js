//Javascript part-4

for (let i = 1; i <= 15; i += 2) {
    console.log(i); //Odd numbers
}

for (let i = 2; i <= 15; i += 2) {
    console.log(i); //even numbers
}

// let n = prompt("Write your number");
// n = parseInt(n);
// for (let i = n; i <= n*10; i += n) {
//     console.log(i); //multiplicaton table
// }

//Favorite Movie

// let favMovie = "Avatar";
// let guess = prompt("Guess our Movie");
// while (guess != favMovie) {
//     if (guess == "Quit") {
//         console.log("You Quit");
//         break;
//     }
//     guess = prompt("Wrong guess. Please try again");
// }

// if (guess == favMovie) {
//     console.log("Congrats !!");
// }

//Nested For Loop
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

//Nested Array
let heros = [
    ['ironman', 'spiderman', 'thor'],
    ['superman', 'wonder woman', 'flash']
];

for (let i = 0; i < heros.length; i++) {
    console.log(`Lists #${i}`);
    for (let j = 0; j < heros[i].length; j++) {
        console.log(heros[i][j]);
    }
}

//For of Loop
let frts = ["mango", "apple", "banana", "litchi", "orange"];

for (fruit of frts) {
    console.log(fruit);
}

for (char of "apnacollege") {
    console.log(char);
}

//Nested for-of-Loop
let nayok = [
    ['ironman', 'spiderman', 'thor'],
    ['superman', 'wonder woman', 'flash']
];

for (list of heros) {
    for (hero of list) {
        console.log(hero);
    }
}