"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {
  router.get("/:id", (req,res) => {

    console.log("summary");
    let data;
    let event_id;
    let selected_id = req.url.substring(1, req.url.length);
    dataHelpers.getSummary(selected_id).then(function (query_response) {
      console.log(query_response[0]);
      data = query_response[0];
      event_id = query_response[0].id;
      let fake_try = "YESSSSSSS";
      dataHelpers.getEventParticipants(event_id).then(function(participants) {
        console.log("MY PARTICIPANTS START HERE  " + participants);
        for (let i in participants)
          console.log(participants[i]);
        res.render("test_summary", {data, participants});
      });
    });

  });

  router.get("/:id/user", (req,res) => {
    console.log("HELLO WORLD");
    console.log("==>" + req.params.id);
    dataHelpers.publicGetSummary(req.params.id).then(function (query_response) {
      console.log(query_response);
      let data = query_response[0];
      res.render("test_user_page", {data});


    });
  });

//STATIC PARTICIPANT POST
  router.post("/:id/user", (req,res) => {
    console.log("HELLO WORLD");
    console.log("==>" + req.params.id);
    dataHelpers.publicGetSummary(req.params.id).then(function (query_response) {
      console.log(query_response);
      let first_name = req.body.f_name;
      let last_name = req.body.l_name;
      let email = req.body.email;
      let attending = true;
      let event_id = query_response[0].id;
      //console.log(first_name);
      dataHelpers.insertParticipant(first_name, last_name, email, attending, event_id);
    });
    console.log(req.body);
    res.send(200);
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
