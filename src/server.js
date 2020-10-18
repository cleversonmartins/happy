// Importar pacotes
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Iniciando o express
const server = express();
server.use(express.static("public"));  // Arquivo estático

// Usar body do request
server.use(express.urlencoded( {extended: true}));

// Configurar template engine
server.set('views', path.join(__dirname, "views")).set('view engine', 'hbs');

// Rota
server.get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)
    .get("/edit-orphanage", pages.editOrphanage)
    .post("/update-orphanage", pages.upateOrphanage);
// Ligar o servidor
server.listen(5500); // Abre a porta :5500