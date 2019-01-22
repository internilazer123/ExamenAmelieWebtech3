const MongoCLient = require("mongodb").MongoClient;

MongoCLient.connect(
  "link-to-mongodb",
  (err, database) => {
    app.post("/quotes", (req, res) => {
      db.collection("quotes").save(req.body, (err, result) => {
        if (err) return console.log(err);
      });
    });
    if (err) return console.log(err);

    console.log("saved to database");
    res.redirect("/");
    db = client.db("");
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  }
);
