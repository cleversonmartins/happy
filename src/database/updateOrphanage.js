function updateOrphanage(db, id, {lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends}) {
    return db.run(`
          UPDATE orphanages SET
            lat = "${lat}",
            lng = "${lng}",
            name = "${name}",
            about = "${about}",
            whatsapp = "${whatsapp}",
            images = "${images}",
            instructions = "${instructions}",
            opening_hours = "${opening_hours}",
            open_on_weekends = "${open_on_weekends}"
            WHERE id="${id}"
      `);
  }
  
  module.exports = updateOrphanage;
  