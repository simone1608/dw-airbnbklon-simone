fetch("data/destinations.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // const destination = data.destinations[0];
        // console.log(data.destinations[0]);

        data.destinations.forEach(function (destination) {
            const cardElement = document.createElement("a");
            cardElement.classList.add("destination-card");
            cardElement.href = `destination.html?id=${destination.id}`;

            document.querySelector(".destinations")

                .append(
                    cardElement
                );

            const imgElement = document.createElement("img");
            imgElement.src = `img/${destination.image}`;
            imgElement.classList.add("destination-image");

            const headingElement = document.createElement("h2");
            headingElement.textContent = destination.title;
            headingElement.classList.add("destination-heading")

            const destinationText = document.createElement("p");
            destinationText.textContent = destination.destination;
            destinationText.classList.add("destination-text")

            cardElement.append(
                imgElement,
                headingElement,
                destinationText
            );
        });


    });