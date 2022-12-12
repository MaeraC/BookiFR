DisplayForm();

DisplayFilters();

const searchSection = document.querySelector(".section-search");
const searchInfoContainer = document.createElement("div");
const searchInfo = document.createElement("p");
const InfoIcone = document.createElement("span");

searchInfoContainer.classList.add("search-info-container");

searchInfo.textContent = "Plus de 500 logements sont disponibles dans cette ville";
InfoIcone.innerHTML = '<i class="fas fa-info"></i>';

searchSection.appendChild(searchInfoContainer);
searchInfoContainer.appendChild(InfoIcone);
searchInfoContainer.appendChild(searchInfo);