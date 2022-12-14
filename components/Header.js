const header                = document.querySelector(".header");
const logo                  = document.createElement("img");
const linkHome              = document.createElement("a");
const nav                   = document.createElement("nav");
const heberg                = document.createElement("a");
const activities            = document.createElement("a");

logo.setAttribute("src", "https://maerac.github.io/BookiFR/assets/logo/Booki.png");
logo.setAttribute("alt", "Logo Booki");
linkHome.setAttribute("href", "https://maerac.github.io/BookiFR/")
heberg.setAttribute("href", "#heberglink");
activities.setAttribute("href", "#activitieslink");

logo.classList.add("logo");
heberg.classList.add("heberg-nav");
activities.classList.add("activities-nav");

heberg.textContent          = "Hébergements";
activities.textContent      = "Activités";

header.appendChild(linkHome);
linkHome.appendChild(logo);
header.appendChild(nav);
nav.appendChild(heberg);
nav.appendChild(activities);