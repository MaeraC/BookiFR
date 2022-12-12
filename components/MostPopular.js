const sectionMostPopular = document.querySelector(".section-most-popular");
const titleMPContainer = document.createElement("div");
const titleMP = document.createElement("h2");
const titleMPIcone = document.createElement("span");

titleMP.textContent = "Les plus populaires";
titleMPIcone.innerHTML = '<i class="fas fa-chart-line"></i>';

sectionMostPopular.appendChild(titleMPContainer);
titleMPContainer.appendChild(titleMP);
titleMPContainer.appendChild(titleMPIcone);