"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.status(200).send("IM IN CREATE EVENTS PAGE");
  });

  // router.get("/:id", (req, res) => {
  //   res.status(200).send("GOT ID AND STUFF");
  // });












  return router;
}
