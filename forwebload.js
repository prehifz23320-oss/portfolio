console.log("JS FILE WORKING");

let loader = document.getElementById("loader");
let form = document.getElementById("form");

setTimeout(function () {

    console.log("3 seconds complete");

    loader.style.display = "none";
    form.style.display = "flex";

}, 3000);