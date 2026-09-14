fetch("data/destinations.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // const destination = data.destinations[0];
        // console.log(data.destinations[0]);

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        data.destinations.forEach(function (destination) {
            const cardElement = document.createElement("section");
            cardElement.classList.add("destination-card");
            // cardElement.href = `destination.html?id=${destination.id}`;

            document.querySelector(".destinations")

                .append(
                    cardElement
                );

            const imgElement = document.createElement("img");
            imgElement.src = `img/${destination.image}`;
            imgElement.classList.add("destination-image");

            const headingElement = document.createElement("a");
            headingElement.textContent = destination.title;
            headingElement.classList.add("destination-heading")
            headingElement.href = `destination.html?id=${destination.id}`;

            const destinationText = document.createElement("p");
            destinationText.textContent = destination.destination;
            destinationText.classList.add("destination-text")

            const favoriteButton = document.createElement("button");
            favoriteButton.textContent = "♡";
            favoriteButton.classList.add("favorite-button");

            if (favorites.includes(destination.id)) {
                favoriteButton.textContent = "♥";
                favoriteButton.classList.add("active");
            }

            favoriteButton.addEventListener("click", function (event) {
                event.preventDefault();

                if (favorites.includes(destination.id)) {
                    favorites = favorites.filter(function (id) {
                        return id !== destination.id;
                    });

                    favoriteButton.textContent = "♡";
                    favoriteButton.classList.remove("active");
                } else {
                    favorites.push(destination.id);

                    favoriteButton.textContent = "♥";
                    favoriteButton.classList.add("active");
                }

                localStorage.setItem("favorites", JSON.stringify(favorites));
            });

            cardElement.append(
                imgElement,
                headingElement,
                destinationText,
                favoriteButton
            );
        });


    });