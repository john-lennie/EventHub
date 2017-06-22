"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {

  router.get("/", (req, res) => {
    dataHelpers.getAllUsers()
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
