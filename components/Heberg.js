fetch("../datas/heberg.json")
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

    heberg.forEach((obj) => {
        const card                      = document.createElement("a");
        const image                     = document.createElement("img");
        const description               = document.createElement("div");
        const title                     = document.createElement("h4");
        const price                     = document.createElement("p");
        const rate                      = document.createElement("div");

        card.setAttribute("href", "");
        image.setAttribute("src", obj.image);

        description.classList.add("description-card");

        title.textContent               = obj.title;
        price.innerHTML                 = "Nuit à partir de " + "<span>" + obj.price + "€" + "</span>";

        for (let i = 0; i< 5; i++) {
           if (i < obj.rate) {
                const star              = document.createElement("span");
                star.innerHTML          = "<i class='fas fa-star'></i>";
                star.style.color        = "#0065FC";
                star.style.fontSize     = "13px";
                rate.appendChild(star);
            }  
            else {
                const star              = document.createElement("span");
                star.innerHTML          = "<i class='fas fa-star'></i>";
                star.style.color        = "#ececec";
                star.style.fontSize     = "13px";
                rate.appendChild(star);
            }
        }

        containerHeberg.appendChild(card);
        card.appendChild(image);
        card.appendChild(description);
        description.appendChild(title);
        description.appendChild(price);
        description.appendChild(rate);
    })

    sectionHeberg.appendChild(titleHeberg);
    sectionHeberg.appendChild(containerHeberg);
    sectionHeberg.appendChild(displayMore);

})


