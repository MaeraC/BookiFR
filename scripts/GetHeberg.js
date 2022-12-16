fetch("https://maerac.github.io/BookiFR/datas/heberg.json")
.then((res) => res.json())
.then((data) => {
    const hebergements = data;

    hebergements.forEach((hebergement) => {
        // Vérifie si l'url contient l'id de l'hébergement
        let verifyUrl = new URLSearchParams(window.location.search);
        verifyUrl.has(hebergement.id);
        let param = verifyUrl.get('id');

        console.log(hebergement)

        if (hebergement.id == param) {
            const DisplayHeberg = DisplayHebergFactory(hebergement);
            DisplayHeberg.getDisplayfactory();
        }

        
    })
})