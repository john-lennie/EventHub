"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (dataHelpers) => {

  router.get("/", (req, res) => {
    res.render("event");
  });

  router.post("/", (req, res) => {
    knex('users')
    .returning('id')
    .insert({first_name: req.body.firstname, last_name: req.body.lastname, email: req.body.email})
    .then((user_id) => {
      console.log("User id;", user_id[0]);
      knex('events')
      .returning('id')
      .insert({event_name: req.body.eventname, event_date: req.body.date, url: 'url', admin_id: user_id[0], desc: req.body.description})
      .then((url_id) => {
        console.log("Url id;",url_id);
      })
    })

    /* knex('events').insert({event_name: req.body.eventname, event_date: req.body.date, url: 'url', admin_id: 3, desc: req.body.description})
    .asCallback(function(err, rows) {
      console.log(rows);
      console.log(err);
    }); */
    res.redirect("/eventshub/event");
  });

  return router;
}
