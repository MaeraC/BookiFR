fetch("https://maerac.github.io/BookiFR/datas/popular.json")
.then((res) => res.json())
.then((data) => {

    const heberg                        = data
    const sectionHeberg                 = document.querySelector(".section-most-popular");
    const titleHeberg                   = document.createElement("h2");
    const containerHeberg               = document.createElement("div");

    titleHeberg.textContent             = "Les plus populaires";

    containerHeberg.classList.add("container-most-popular");

    sectionHeberg.appendChild(titleHeberg);
    sectionHeberg.appendChild(containerHeberg);

    heberg.forEach((item) => {
        const cardModel = CardFactoryMP(item);
        cardModel.getCardModelMP();
    });

    
})

