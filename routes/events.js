"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("events")
      .then((results) => {
        console.log(results);
        res.json(results);
    });
  });
  return router;
}
