const footer = document.querySelector(".footer");
const containerAbout = document.createElement("div");
const titleAbout = document.createElement("h3");
const listAbout = document.createElement("ul");
const containerHebergg = document.createElement("div");
const titleHebergg = document.createElement("h3");
const listHebergg = document.createElement("ul");
const containerAssistance = document.createElement("div");
const titleAssistance = document.createElement("h3");
const listAssistance = document.createElement("ul");

const arrayAbout = ["Fonctionnement du site", "Conditions générales de ventes", "Données et confidentialités"];
const arrayHebergg = ["Charte qualité", "Soumettre votre hôtel"];
const arrayAssistance = ["Centre d'aide", "Nous contacter"];

titleAbout.textContent = "À propos";
titleHebergg.textContent = "Nos hébergements";
titleAssistance.textContent = "Assistance";

arrayAbout.forEach((item) => {
    const aboutItem = document.createElement("li");
    aboutItem.textContent = item;
    listAbout.appendChild(aboutItem);
});

arrayHebergg.forEach((item) => {
    const hebergItem = document.createElement("li");
    hebergItem.textContent = item;
    listHebergg.appendChild(hebergItem);
});

arrayAssistance.forEach((item) => {
    const assistanceItem = document.createElement("li");
    assistanceItem.textContent = item;
    listAssistance.appendChild(assistanceItem);
});

footer.appendChild(containerAbout);
containerAbout.appendChild(titleAbout); 
containerAbout.appendChild(listAbout);
footer.appendChild(containerHebergg);
containerHebergg.appendChild(titleHebergg);
containerHebergg.appendChild(listHebergg);
footer.appendChild(containerAssistance);
containerAssistance.appendChild(titleAssistance);
containerAssistance.appendChild(listAssistance);

