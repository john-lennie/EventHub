"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {

  router.get("/", (req, res) => {
    res.render("event");
  });

  router.post("/", (req, res) => {
    let newURL = dataHelpers.generateURL();
    let adminURL = dataHelpers.generateURL();
    dataHelpers.createAdminAndEvent(req.body.firstname,req.body.lastname,req.body.email, req.body.eventname, req.body.date, req.body.description, newURL, adminURL)
    res.status(200).send("/eventshub/event/" + adminURL);
  });

  return router;
}
