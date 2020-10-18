addMarker();
addFieldValues();

function addMarker() {
    let lat = document.querySelector("span[data-lat]").dataset.lat;
    let lng = document.querySelector("span[data-lng]").dataset.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    map.setView([lat,lng], 17);
    marker = L.marker([lat, lng], {icon}).addTo(map);
}

function addFieldValues() {
    document.querySelector('[name="id"]').value = document.querySelector("span[data-id]").dataset.id;
    document.querySelector('[name="name"]').value = document.querySelector("span[data-name]").dataset.name;
    document.querySelector('[name="about"]').value = document.querySelector("span[data-about]").dataset.about;
    document.querySelector('[name="whatsapp"]').value = document.querySelector("span[data-whatsapp]").dataset.whatsapp;
    document.querySelector('[name="instructions"]').value = document.querySelector("span[data-instructions]").dataset.instructions;
    document.querySelector('[name="opening_hours"]').value = document.querySelector("span[data-opening_hours]").dataset.opening_hours;

    // Adiciona Fotos
   let container = document.querySelector("#images");
   let fieldsContainer = document.querySelectorAll(".new-upload");
   let images = document.querySelector("span[data-images]").dataset.images.split(",");
   
   let newFieldContainer;
   let firstIndex = true;
   images.forEach(image => {
        if(firstIndex) {
            fieldsContainer[0].children[0].value = image;
            firstIndex = false;
            return;
        }
        newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
        newFieldContainer.children[0].value = image;
        // Adicionar o clone ao container de images
        container.appendChild(newFieldContainer);
   });

   let open_on_weekends = document.querySelector("span[data-open_on_weekends]").dataset.open_on_weekends;
   let button = document.querySelectorAll(".button-select");
   if(open_on_weekends == 0) {
       button[0].children[1].classList.add("active");
       button[0].children[0].classList.remove("active");
    }
}