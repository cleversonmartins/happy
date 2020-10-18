const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;

// Create Map
const map = L.map('mapid', options).setView([lat,lng], 17);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Create and marker Pop-UP
L.marker([lat,lng], { icon: icon }).addTo(map);

// Marca a primeira imagem ao abrir a página
unselectAllButtons();
document.querySelectorAll(".images button")[0].classList.add("active");

// Image Gallery
function selectImage(event) {
    const button = event.currentTarget;

    // Remover todas as classes .active
    unselectAllButtons();

    // Selecionar a imagem clicada
    const image = button.children[0];

    // Atualizar o container de imagem
    window.document.querySelector(".orphanage-details > img").src = image.src;
    
    // Adicionar a classe .active para este botão
    button.classList.add("active");
}

function unselectAllButtons() {
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => { // => Arrow function
        button.classList.remove("active");
    }) 
}