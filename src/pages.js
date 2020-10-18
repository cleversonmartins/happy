const { query } = require("express");
const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");
const updateOrphanage = require("./database/updateOrphanage");

module.exports = {

    index(request, response) {
        return response.render("index");
    },

    async orphanage(request, response) {
        try {
            const db = await Database;
            const result = await db.all(`SELECT * FROM orphanages WHERE id = "${request.query.id}"`);
            const orphanage = result[0];
           
            orphanage.images = orphanage.images.split(",");
            orphanage.firstImage = orphanage.images[0];

            orphanage.open_on_weekends = orphanage.open_on_weekends == "1" ? true : false;

            return response.render("orphanage", {orphanage: orphanage});
        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados");
        }
    },

    async orphanages(request, response) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return response.render("orphanages", {orphanages});
        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados");
        }
        
    },

    createOrphanage(request, response) {
        return response.render("create-orphanage");
    },

    async saveOrphanage(request, response) {
        const fields = request.body;
        // Valida se todos os campos estão preenchidos
        if(Object.values(fields).includes("")) {
            return response.send("Todos os campos devem ser preenchidos!!");
        }
        
        try {
            const db = await Database;
            await saveOrphanage(db, fields);
            return response.redirect("/orphanages");
        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados!");
        }
    },

    async editOrphanage(request, response) {
        try {
            const db = await Database;
            const result = await db.all(`SELECT * FROM orphanages WHERE id = "${request.query.id}"`);
            const orphanage = result[0];
            return response.render("edit-orphanage", {orphanage}); 
        } catch (error) {
            console.log(error);
        }
    },

    async upateOrphanage(request, response) {
        const fields = request.body;

        if(Object.values(fields).includes("")) {
            return response.send("Todos os campos devem ser preenchidos!!");
        }
        
        try {
            const db = await Database;
            await updateOrphanage(db, fields.id, fields);
            return response.redirect(`/orphanage?id=${fields.id}`);
        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados!");
        }
    }
}