"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    res.status(200).send("EVENTSURL:==>WE GOT THE ID AND STUFF");
  });
  return router;
}
