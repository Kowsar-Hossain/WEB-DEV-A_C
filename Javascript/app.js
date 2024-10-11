function hello() {
    console.log("Hello");
}

hello();

//Print a poem
function printPoem() {
    console.log("Twinkle Twinle");
    console.log("Little Star");
}
printPoem();

//Roll a dice
function rollDice() {
    console.log(Math.floor(Math.random() * 5) + 1);
}
rollDice();

//Function with argument
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Kowsar", 23);

//Print Mulitplication Table
function mulTable(n) {
    for (let i = 1; i < 11; i += 1) {
        console.log(`${n} x ${i} = ${n*i}`);
    }
}
mulTable(5);

//Return sum from 1 to n
let add = 0;

function sum(n) {
    for (let i = 0; i < n + 1; i++) {
        add += i;
    }
    return add;
}
console.log(sum(10));

//Contatinate a string
let str = ['Md', 'Kowsar', 'Hossain'];

function concat(str) {
    let result;
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concat(str));

//Assignment Question
//Q-1
let arr = [2, 5, 4, 6, 7, 8, 9, 6];
let num = 5;

function findLarge(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
findLarge(arr, num);

//Q-2
let stri = 'abcdabcdefgggh';

function uniqueChar(str) {
    let final = " ";
    for (let i = 0; i < stri.length; i++) {
        let char = stri[i];
        if (final.indexOf(char) == -1) {
            final += char;

        }
    }
    console.log(final);
}
uniqueChar(stri);

//Q-3
let country = ["Australia", "Germany", "UnitedStatesofAmerica"];

function longestCountry(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currlen = country[i].length;
        if (currlen > ansLen) {
            ansIdx = i;
        }
    }
    console.log(ansIdx);
}
longestCountry(country);

//Q-4
let name = 'kowsarhossain';

function countVowel(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
            count++;
        }
    }
    console.log(count);
}
countVowel(name);

//Q-5
let start = 100;
let end = 200;

function genarateRandom(start, end) {
    let diff = end - start;
    console.log(Math.floor(Math.random() * diff) + start);
}
genarateRandom(start, end);