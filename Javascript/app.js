//Class-11

let h1 = document.querySelector("h1");

// function colorChange(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// colorChange("red", 1000, () => {
//     colorChange("orange", 1000, () => {
//         colorChange("blue", 1000);
//     });
// });


function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed");
        }, delay);
    })
}

colorChange("red", 1000)
    .then(() => {
        console.log("red color completed");
        return colorChange("blue", 2000);
    })
    .then(() => {
        console.log("Blue color Comoleted");
        return colorChange("yellow", 5000);
    })
    .then(() => {
        console.log("Yellow color Changed");
    })
    .catch(() => {
        console.log("Color not Changed !!");
    })


//Callback Hell
// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("apna College", () => {
//     console.log("Successfully saved data");
//     saveToDb("Hello World", () => {
//         console.log("SuccessFull2");
//     }, () => {
//         console.log("Weak Connection2");
//     })
// }, () => {
//     console.log("Failure !! Weak Connection");
// })

//Promises

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Data was saved");
        } else {
            reject("Weak Connection !!");
        }
    });
}

//using then & catch method
saveToDb("Apna College")
    .then(() => {
        console.log("Data was saved");
    })
    .catch(() => {
        console.log("Data was rejected");
    })