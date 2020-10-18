// Create Map
const map = L.map('mapid').setView([-25.4316932,-49.270384], 15);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;
// Create and add marker
map.on("click", function(event) {
    document.querySelector("[name=lat]").value = event.latlng.lat;
    document.querySelector("[name=lng]").value = event.latlng.lng;

    // Remove icon
    marker && map.removeLayer(marker);  // Se o marker existir ele remove a marcação

    // Add icon layer
    marker = L.marker([event.latlng.lat, event.latlng.lng], {icon}).addTo(map);
});

// Adicionar o campo de fotos
function addPhotoField() {
   // Pegar o container de fotos #images
   const container = document.querySelector("#images");
   // Pegar o container para duplicar .new-image
   const fieldsContainer = document.querySelectorAll(".new-upload");
   
   // Limita a 6 fotos 
   if(fieldsContainer.length <= 5) {
        // Realizar o clone da última imagem adicionada
        const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
        // Verifica se o campo foi preenchido
            if (newFieldContainer.children[0].value == "") return;
        // Limpa o campo antes de adicionar ao container de imagens
        newFieldContainer.children[0].value = "";
        // Adicionar o clone ao container de images
        container.appendChild(newFieldContainer);
   } else alert("Só é possivel adicionar 6 fotos!")
}

function deleteField(event) {
    if (document.querySelectorAll(".new-upload").length <= 1) {
        event.currentTarget.parentNode.children[0].value = "";
        return;
    }
    event.currentTarget.parentNode.remove();
}

// Select Yes or No
function toggleSelect(event) {
    // Retirar a classe active dos botões
    document.querySelectorAll(".button-select button").forEach(button => button.classList.remove("active"));
    // Colocar a classe active no botão selecionado
    const button = event.currentTarget;
    button.classList.add("active");
    // Atualizar o meu input value com o valor selecionado
    document.querySelector('[name="open_on_weekends"]').value = button.dataset.value;

}

function validate(event) {
    if(document.querySelector("[name=lat]").value == "" || document.querySelector("[name=lng]").value == "") {
        event.preventDefault();
        alert("Selecione um ponto no mapa!");
    }
}