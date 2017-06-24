"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {

  router.get("/:id", (req,res) => {
<<<<<<< HEAD
    let adminURL = req.url.substring(1, req.url.length);
    dataHelpers.getSummary( adminURL ).then(function (eventInfo) {
      let data = eventInfo[0];
      dataHelpers.getEventParticipants(eventInfo[0].id).then(function(participants) {
        res.render("test_summary", {data, participants});
=======
    let data;
    let event_id;
    let selected_id = req.url.substring(1, req.url.length);
    dataHelpers.getSummary(selected_id).then(function (query_response) {
      data = query_response[0];
      event_id = query_response[0].id;
      dataHelpers.getEventParticipants(event_id).then(function(participants) {
        res.render("admin_summary", {data, participants});
>>>>>>> 58ac0853e801f40d319dde916c6b2a1b2899a21b
      });
    });
  });

  router.get("/:id/participant", (req,res) => {
    console.log("HELLO WORLD");
    console.log("==>" + req.params.id);
    dataHelpers.publicGetSummary(req.params.id).then(function (query_response) {
      console.log(query_response);
      let data = query_response[0];
      res.render("participant_summary", {data});


    });
  });

//STATIC PARTICIPANT POST
  router.post("/:id/participant", (req,res) => {
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
