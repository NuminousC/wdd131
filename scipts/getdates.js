const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = ` ${today.getFullYear()} `;

document.getElementById("lastModified").innerHTML = document.lastModified;
