function DisplayHebergFactory(data) {

    const { image, title, rate, price, description, tags } = data;

    function getDisplayfactory() {

        const section = document.querySelector(".heberg");
        const container = document.createElement("container");
        const aside = document.createElement("aside");
        const img = document.createElement("img");
        const reservedBox = document.createElement("div");
        const reservedBtn = document.createElement("button");
        const reservedPrice = document.createElement("span");
        const informations = document.createElement("div");

        img.setAttribute("src", image);
        img.setAttribute("alt", title);

        aside.classList.add("aside");
        img.classList.add("big-image");
        container.classList.add("container");
        reservedBox.classList.add("reserved-box");
        informations.classList.add("informations");

        reservedBtn.textContent = "Réserver";
        reservedPrice.textContent = price + "€";

        

        //console.log(data)

        

        section.appendChild(container);
        container.appendChild(img);
        container.appendChild(aside);
        aside.appendChild(reservedBox);
        reservedBox.appendChild(reservedBtn);
        reservedBox.appendChild(reservedPrice);
        aside.appendChild(informations);
    }

    return { image, title, rate, price, description, tags, getDisplayfactory }
}