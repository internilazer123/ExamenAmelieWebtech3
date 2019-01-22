applicationCache.get("/list", (req, res) => {
  db.collection("inschrijvingen")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.render("aanvraagInhaalexamen.ejs", { inschrijvingen: result });
    });
  if ((Naam && Examen && Reden) || (Naam && Examen && Reden))
    return Naam && Examen && Reden;
  else return console.log(err);
});
