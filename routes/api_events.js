"use strict";

const express = require('express');
const router  = express.Router();
module.exports = (dataHelpers) => {

  router.get("/", (req, res) => {
    dataHelpers.getAllEvents()
      .then((results) => {
        console.log(results);
        res.json(results);
    });
  });
  return router;
}
