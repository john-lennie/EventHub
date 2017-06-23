"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {
  router.get("/:id", (req,res) => {

    console.log("summary");
    let selected_id = req.url.substring(1, req.url.length);
    dataHelpers.getSummary(selected_id).then(function (query_response) {
      console.log(query_response[0]);


      let data = query_response[0];
      res.render("summary", {data});

    });

  });

  router.get("/:id/user", (req,res) => {
    console.log("HELLO WORLD");
    console.log("==>" + req.params.id);
    dataHelpers.publicGetSummary(req.params.id).then(function (query_response) {
      console.log(query_response);
      res.render("test_user_page", query_response[0]);


    });
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
