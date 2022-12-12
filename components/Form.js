const sectionSearch                 = document.querySelector(".section-search");
const titleSearch                   = document.createElement("h1");
const titleSearch2                  = document.createElement("h2");
const formContainer                 = document.createElement("div");
const localisationBtn               = document.createElement("button");
const searchBar                     = document.createElement("input");
const submitContainer               = document.createElement("div");
const submitBtn                     = document.createElement("input");
const submitIcone                   = document.createElement("span");

function DisplayForm() {
    formContainer.classList.add("form-container");
    localisationBtn.classList.add("localisation-btn");
    searchBar.classList.add("search-bar");
    submitBtn.classList.add("submit-btn");
    submitContainer.classList.add("submit-container");
    
    titleSearch.textContent         = "Trouver votre hébergement pour des vacances de rêve";
    titleSearch2.textContent        = "En plein centre-ville ou en pleine nature";
    localisationBtn.innerHTML       = "<i class='fas fa-map-marker-alt '></i>";
    submitIcone.innerHTML           = "<i class='fas fa-search'></i>";

    searchBar.setAttribute("placeholder", "Marseille, France");
    searchBar.setAttribute("type", "search");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "");
    
    sectionSearch.appendChild(titleSearch);
    sectionSearch.appendChild(titleSearch2);
    sectionSearch.appendChild(formContainer);
    formContainer.appendChild(localisationBtn);
    formContainer.appendChild(searchBar);
    formContainer.appendChild(submitContainer);
    submitContainer.appendChild(submitBtn);
    submitContainer.appendChild(submitIcone);
}