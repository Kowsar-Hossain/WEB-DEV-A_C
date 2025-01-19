//Class-09
//Practice Question

let p = document.createElement("p");
p.innerText = "Hey I'm red!";
document.querySelector("body").append(p);

p.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");

h1.innerText = "I'm in a div";
para.innerText = "ME TOO";

div.append(h1);
div.append(para);

div.classList.add("box");
document.querySelector("body").append(div);


//Assignment Question-1
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Assignment Question-2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

//Assignment Question-3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Assignment Question-3
let h = document.createElement("h1");
h.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h);