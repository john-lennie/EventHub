"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    res.status(200).send("IM IN HOMEPAGE");
  });
  return router;
}
