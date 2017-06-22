"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {

  router.get("/", (req, res) => {
    res.render("event");
  });

  router.post("/", (req, res) => {
    let newURL = dataHelpers.generateURL();
    dataHelpers.createAdminAndEvent(req.body.firstname,req.body.lastname,req.body.email, req.body.eventname, req.body.date, req.body.description, newURL);
    res.redirect("/eventshub");
  });

  return router;
}
