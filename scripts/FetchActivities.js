fetch("https://maerac.github.io/BookiFR/datas/activities.json")
.then((res) => res.json())
.then((data) => {

    const activities                        = data.container1;
    const activities2                       = data.container2;

    activities.forEach((item) => {
        const cardModelA                    = CardFactoryA(item);
        cardModelA.getCardModelA();
    });

    activities2.forEach((item) => {
        const cardModelA                    = CardFactoryA(item);
        cardModelA.getCardModelA();
    
    });

    
})
 