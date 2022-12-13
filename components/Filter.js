function DisplayFilters() {
    const sectionSearch                 = document.querySelector(".section-search");
    const titleFilter                   = document.createElement("h4");
    const filterContainer               = document.createElement("div");

    const arrayFilter = [
        {
            title: "Economique", image: "https://maerac.github.io/BookiFR/assets/icones/economique.png"
        },
        {
            title: "Familial", image: "https://maerac.github.io/BookiFR/assets/icones/familiale.png"
        },
        {
            title: "Romantique", image: "https://maerac.github.io/BookiFR/assets/icones/romantique.png"
        },
        {
            title: "Animaux adoptés", image: "https://maerac.github.io/BookiFR/assets/icones/animaux.png"
        }
    ];

    titleFilter.textContent             = "Filtres";

    arrayFilter.forEach((object) => {
        const filterBox                 = document.createElement("div");
        const title                     = document.createElement("p");
        const icone                     = document.createElement("img");

        title.textContent               = object.title;

        icone.setAttribute("src", object.image)
        filterContainer.classList.add("filter-container");

        filterContainer.appendChild(filterBox);
        filterBox.appendChild(icone);
        filterBox.appendChild(title);
    })


    sectionSearch.appendChild(titleFilter);
    sectionSearch.appendChild(filterContainer);
}