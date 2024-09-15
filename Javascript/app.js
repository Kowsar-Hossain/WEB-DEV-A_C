let msg = "     Hello    ";
console.log(msg.trim()); //Trim method

let str = "  Kow sar  ";
let newStr = str.trim();
console.log(newStr);

console.log(str.toUpperCase()); //toUpperCase Method KOW SAR
console.log(str.toLowerCase()); //toLowerCase Method kow sar

let strs = "  ILoveCoding"; //indexOf Method
console.log(strs.indexOf("Love")); //1
console.log(strs.indexOf("j")); //-1
console.log(strs.indexOf("o")); //2
console.log(strs.toUpperCase().trim()); //ILOVECODING

let string = "ILoveCoding";
console.log(string.slice(5)); //Coding
console.log(string.slice(1, 4)); //Love
console.log(string.slice(-1)); //length-1=10-1=9->g


//replace
console.log(string.replace("Love", "Do")); //IDoCoding
console.log(string.replace("o", "x")); //ILxveCoding


//repeat
console.log(string.repeat(2)); //ILoveCodingILoveCoding

//Practice C3-Q1
let massage = "help!";
console.log(massage.trim().toUpperCase());

//Practice C3-Q2
let name = "ApnaCollege";
console.log(name.slice(4, 9)); //Colle
console.log(name.indexOf("na")); //2
console.log(name.replace("Apna", "Our")); //OurCollege

//Practice C3-Q3
console.log(name.slice(4).replace("l", "t")); //Cotlege

//Array
let students = ["Kowsar", "Manik", "Hossain"];
console.log(students);
let nums = [2, 3, 4, 5];
console.log(nums[3]); //5

//Visualizing Array
let num = [2, 3, 6, 8];
console.log(num);
console.log([1, 2, 3, 4].length);

//Array Mutable
let fruit = ["Mango", "Banana", "Apple"];
fruit[1] = "Orange";
fruit[10] = "Goava";
console.log(fruit);

//Array Method
let cars = ["BMW", "Audi", "xuv"];
cars.push("Toyota");
console.log(cars);


let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);

//Practice C3-Q3
let months = ["January", "July", "march", "august"];
months.shift();
months.shift();
months.unshift("June");
months.unshift("July");
console.log(months);

//Practice C3-Q4
let month = ['January', 'July', 'march', 'august'];
month.splice(0, 2, 'july', 'june');
console.log(month);

let lan = ['c', 'c++', 'html', 'javascript', 'python', 'c#', 'sql'];
console.log(lan.reverse().indexOf('javascript'));

//Practice C3-Q5
let game = [
    ['X', ' ', '0'],
    [' ', 'X', ' '],
    ['0', ' ', 'X']
];
console.log(game);

//Assignment Qestion-1
let array = [1, 2, 3, 4, 5];
let n = 4;
console.log(array.slice(0, n));

//Assignment Qestion-2
console.log(array.splice(1, 4));

//Assignment Qestion-3
let stri = '';
if (stri.length == 0) {
    console.log("String is blank");
} else {
    console.log("Not Blank");
}

//Assignment Qestion-4
let char = "ApNaCollEge";
let idx = 3;
if (char[idx] == str[idx].toLowerCase()) {
    console.log("Character is lowercase");
} else {
    console.log("character is not Lowercase");
}

//Assignment Qestion-5
let akhi = "  Ak hi   ";
console.log(akhi.trim());

//Assignment Qestion-6
let arr = [6, 4, 3, 8, 3, 7];
let number = 7;
if (arr.indexOf(number) != -1) {
    console.log("Exist");
} else {
    console.log("Not Exist");

}