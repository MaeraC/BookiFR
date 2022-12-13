function CardFactoryA(data) {
    const { title1, image1 , className} = data;

    function getCardModelA() {
        const blocContainer                 = document.querySelector(".bloc-container");
        const container1                    = document.querySelector(".container1");
        const card1                         = document.createElement("a");
        const img1                          = document.createElement("img");
        const titleCard1                    = document.createElement("p");

        card1.setAttribute("href", "");
        img1.setAttribute("src", image1);

        container1.classList.add("container1");
        card1.classList.add(className);

        titleCard1.textContent              = title1;

        
        

        blocContainer.appendChild(container1);
        container1.appendChild(card1);
        card1.appendChild(img1);
        card1.appendChild(titleCard1);
        

    }
 
    return { title1, image1, className, getCardModelA }
} 