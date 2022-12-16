function CardFactory(data) {
    const { title, price, rate, image, id } = data;

    function getCardModel() {
        const sectionHeberg                 = document.querySelector(".container-heberg");
        const card                          = document.createElement("a");
        const img                           = document.createElement("img");
        const description                   = document.createElement("div");
        const titleHeberg                   = document.createElement("h4");
        const priceHeberg                   = document.createElement("p");
        const rateHeberg                    = document.createElement("div");

        card.setAttribute("href", `pages/HebergementsPage.html?id=${id}`);
        img.setAttribute("src", image);
        description.classList.add("description-card");

        titleHeberg.textContent             = title;
        priceHeberg.innerHTML               = "Nuit à partir de " + "<span>" + price + "€" + "</span>";

        for (let i = 0; i< 5; i++) {
            if (i < rate) {
                const star                  = document.createElement("span");
                star.innerHTML              = "<i class='fas fa-star'></i>";
                star.style.color            = "#0065FC";
                star.style.fontSize         = "13px";
                rateHeberg.appendChild(star);
            }  
            else {
                const star                  = document.createElement("span");
                star.innerHTML              = "<i class='fas fa-star'></i>";
                star.style.color            = "#ececec";
                star.style.fontSize         = "13px";
                rateHeberg.appendChild(star);
            }
        }

        sectionHeberg.appendChild(card);
        card.appendChild(img);
        card.appendChild(description);
        description.appendChild(titleHeberg);
        description.appendChild(priceHeberg);
        description.appendChild(rateHeberg);
    }
 
    return { title, image, rate, price, id, getCardModel }
}