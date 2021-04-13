const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// CREATE

router.post("/", (req, res) => {
  const sqlQuery = `INSERT INTO "list" ("content")
                        VALUES ($1);`;

  pool
    .query(sqlQuery, [req.body.content])
    .then(() => {
      console.log("Inserted item successfully");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Error in inserting list item", err);
      res.sendStatus(500);
    });
});

// READ

router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM "list";`;

  pool
    .query(sqlQuery)
    .then((response) => {
      console.log("retrieved list data successfully");
      res.send(response.rows).status(200);
    })
    .catch((err) => {
      console.log("Error in fetching list data", err);
      res.sendStatus(500);
    });
});

// UPDATE

// DELETE

module.exports = router;