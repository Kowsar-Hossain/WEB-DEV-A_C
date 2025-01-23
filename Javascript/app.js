//Class - 12
//Async function

async function greet() {
    //throw "Invalid";
    return "Hello";
}

greet()
    .then((result) => {
        console.log("Hello was print : ", result);
    })
    .catch((err) => {
        console.log("Reject the hello : ", err);
    })

//await keyword

let h1 = document.querySelector("h1");

function
colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}!`);
            resolve("Color changed");
        }, delay);
    });
}

async function demo() {
    await colorChange("red", 1000);
    await colorChange("yellow", 1000);
    await colorChange("blue", 1000);
    colorChange("orange", 1000);
}


//JSON to JS Object Conversion
let jsonRes = '{"fact":"The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.","length":101}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.length);

//JS object to JSON
let student = {
    name: "kowsar",
    marks: 54
};
console.log(JSON.stringify(student));

//API request
// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch(url);
//     })
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR : ", err);
//     })

//API request for asyna and await
let url = "https://catfact.ninja/fact";

async function getFetch() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (e) {
        console.log("ERROR : ", e);
    }
}


// async function getFetch() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch (e) {
//         console.log("ERROR : ", e);
//     }
// }