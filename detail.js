const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);


fetch(`data/${id}.json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const boxElement = document.querySelector(".destination-box");

        const imageElement = document.createElement("img");
        imageElement.src = `img/${data.image}`;
        imageElement.classList.add("image");

        const sectionElement = document.createElement("section");
        sectionElement.classList.add("section-text");

        boxElement.append(
            imageElement,
            sectionElement
        );

        const destinationElement = document.createElement("p");
        destinationElement.textContent = data.destination;
        destinationElement.classList.add("destination");

        const titleElement = document.createElement("h1");
        titleElement.textContent = data.title;
        titleElement.classList.add("title");

        const subtitleElement = document.createElement("h2");
        subtitleElement.textContent = data.subtitle;
        subtitleElement.classList.add("subtitle");

        const textElement = document.createElement("p");
        textElement.textContent = data.text;
        textElement.classList.add("text");

        const facilitiesTitleElement = document.createElement("h3");
        facilitiesTitleElement.textContent = "Faciliteter";
        facilitiesTitleElement.classList.add("facilities-title");

        const ulElement = document.createElement("ul");
        ulElement.classList.add("ul");

        data.facilities.forEach(function (facility) {
            const liElement = document.createElement("li");
            liElement.textContent = facility;
            liElement.classList.add("li");

            ulElement.append(
                liElement
            );
        });



        sectionElement.append(
            destinationElement,
            titleElement,
            subtitleElement,
            textElement,
            facilitiesTitleElement,
            ulElement
        );


    })