// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//     let facts = await getFetch();
//     console.log(facts);;
//     let p = document.querySelector("#result");
//     p.innerText = facts;
// })

// //API request for async and await
// let url = "https://catfact.ninja/fact";

// async function getFetch() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("ERROR : ", e);
//         return "No Fact Found";
//     }
// }

//API request for a dog image
// let bttn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// bttn.addEventListener("click", async() => {
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     } catch (e) {
//         console.log("ERROR : ", e);
//         return "No Image Found";
//     }
// }

//API request for updating query string
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let college = await getCollege(country);
    show(college);
});

function show(college) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of college) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("Error :", e);
    }
}