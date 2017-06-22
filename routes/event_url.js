"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {
  router.get("/:id", (req,res) => {
    res.render("summary");
  });


  router.post("/:id", (req, res) => {
    let selected_id = req.url.substring(1, req.url.length);
    console.log("==========>" + selected_id);

    console.log("I GOT THE AJAX CALL NOW " + selected_id);
    let DUMMY_DATA = dataHelpers.getSummary(selected_id).then(function (query_response) {
      console.log(query_response);
      res.json(query_response);
    });
  });
  return router;
}
