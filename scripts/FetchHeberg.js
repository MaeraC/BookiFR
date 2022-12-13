fetch("https://maerac.github.io/BookiFR/datas/heberg.json")
.then((res) => res.json())
.then((data) => {

    const heberg                        = data
    const sectionHeberg                 = document.querySelector(".section-heberg");
    const titleHeberg                   = document.createElement("h2");
    const containerHeberg               = document.createElement("div");
    const displayMore                   = document.createElement("a");

    titleHeberg.textContent             = "Hébergement à Marseille";
    displayMore.textContent             = "Afficher plus";

    containerHeberg.classList.add("container-heberg");
    displayMore.classList.add("display-more");

    sectionHeberg.appendChild(titleHeberg);
    sectionHeberg.appendChild(containerHeberg);
    sectionHeberg.appendChild(displayMore);

    heberg.forEach((item) => {
        const cardModel = CardFactory(item);
        cardModel.getCardModel();
    });
})


