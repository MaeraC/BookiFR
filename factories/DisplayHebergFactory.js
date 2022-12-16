function DisplayHebergFactory(data) {

    const { image, title, rate, price, tags } = data;

    function getDisplayfactory() {

        const section = document.querySelector(".heberg");
        const container = document.createElement("container");
        const aside = document.createElement("aside");
        const img = document.createElement("img");
        const reservedBox = document.createElement("div");
        const reservedBtn = document.createElement("button");
        const reservedPrice = document.createElement("span");
        const informations = document.createElement("ul");
        const rateHebergg = document.createElement("div");
        const hebergBox = document.createElement("div");
        const titleBox = document.createElement("div");
        const titleHebergg = document.createElement("h2");

        img.setAttribute("src", image);
        img.setAttribute("alt", title);

        aside.classList.add("aside");
        img.classList.add("big-image");
        container.classList.add("container");
        reservedBox.classList.add("reserved-box");
        informations.classList.add("informations");
        hebergBox.classList.add("heberg-box");
        titleBox.classList.add("title-box");

        reservedBtn.textContent = "Réserver";
        reservedPrice.innerHTML = "<span class='nuit-price'>Nuit à partir de </span>" + price + "€";
        titleHebergg.textContent = title;

        tags.forEach((tag) => {
            const tagNode = document.createElement("li");
            tagNode.textContent = tag;
            tagNode.classList.add("tag");
            informations.appendChild(tagNode);
        });

        for (let i = 0; i< 5; i++) {
            if (i < rate) {
                const star                  = document.createElement("span");
                star.innerHTML              = "<i class='fas fa-star'></i>";
                star.style.color            = "#0065FC";
                star.style.fontSize         = "13px";
                rateHebergg.appendChild(star);
            }  
            else {
                const star                  = document.createElement("span");
                star.innerHTML              = "<i class='fas fa-star'></i>";
                star.style.color            = "#ececec";
                star.style.fontSize         = "13px";
                rateHebergg.appendChild(star);
            }
        }

        section.appendChild(container);
        container.appendChild(hebergBox);
        hebergBox.appendChild(img);
        hebergBox.appendChild(titleBox);
        titleBox.appendChild(titleHebergg);
        container.appendChild(aside);
        aside.appendChild(reservedBtn);
        aside.appendChild(reservedBox);
        reservedBox.appendChild(reservedPrice);
        titleBox.appendChild(rateHebergg);
        aside.appendChild(informations);

    }

    return { image, title, rate, price, tags, getDisplayfactory }
}