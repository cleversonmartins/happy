const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2125144",
    lng: "-49.6554987",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "99999-9999",
    images: [
        "https://images.unsplash.com/photo-1601215146209-415141f1b554?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

        "https://images.unsplash.com/photo-1601574465779-76d6dbb88557?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    ].toString(),
    instruction: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visita Das 18h até 8h",
    open_on_weekends: "0"
  });

  //console.log(db.run(' DELETE FROM orphanages WHERE id = "4"'));

  // Consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");

  // Consultar somente 1 orfanato
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"');
  console.log(selectedOrphanages);
});
