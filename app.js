"use strict"

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let searchButton = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let image = document.getElementById("gif");
let feedback = document.querySelector("#feedback");
let form = document.querySelector("#inputContainer");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "8xT89uK8gxhNC8CZx61XKOfdkpCFmAOa";

searchButton.addEventListener("click", (event) => {
    console.log (event);
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&S=${searchInput.value}`,
    {mode: "cors"}
    )
        .then((res) => {
            return res.json();
        })
        .then((resJSON) => {
            console.log(resJSON);
            image.src = resJSON.data.images.original.url;
            image.alt = resJSON.data.title;
            searchInput.value = ""
            feedback.textContent = "";``
        })
        .catch((err) => {
            console.error(err);
            feedback.textContent = err.message;
        });
});