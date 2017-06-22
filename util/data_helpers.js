"use strict";

// Exports helper functions for making queries in DB.
// Need to require where functions need to be used.
// const DataHelpers = require("./util/data-helpers.js");

module.exports = function makeDataHelpers(knex) {
  return {
    //generate random string for user id and short url
    generateURL: function() {
      return Math.random().toString(36).substr(2, 16);
    },

    // // getll all users from db

    getAllUsers: function() {
      return knex
      .select("*")
      .from("users")
    },

    // get all events from db
    getAllEvents: function() {
      return knex
      .select("*")
      .from("events")
    },

    // // get all participants from db
    getAllParticipants: function() {
      return knex
      .select("*")
      .from("participants")
    },

    // // need query with eventSummary, event name, event time, host name,
    // // and description where URL = a parameter thats going to be passed by me

    getSummary: function(url) {
      return knex('events')
      .where('url', url)
      .join('users', 'events.admin_id', '=', 'users.id')
      .select('events.id','event_name', 'event_date', 'url', 'desc', 'users.first_name', 'users.last_name', 'desc')
    }
  }
}
