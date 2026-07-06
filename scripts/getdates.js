const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;
