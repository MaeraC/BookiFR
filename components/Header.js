const header                = document.querySelector(".header");
const logo                  = document.createElement("img");
const nav                   = document.createElement("nav");
const heberg                = document.createElement("a");
const activities            = document.createElement("a");

logo.setAttribute("src", "../assets/logo/Booki.png");
logo.setAttribute("alt", "Logo Booki");
heberg.setAttribute("href", "");
activities.setAttribute("href", "");

logo.classList.add("logo");
heberg.classList.add("heberg-nav");
activities.classList.add("activities-nav");

heberg.textContent          = "Hébergements";
activities.textContent      = "Activités";

header.appendChild(logo);
header.appendChild(nav);
nav.appendChild(heberg);
nav.appendChild(activities);