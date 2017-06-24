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

    //////DB Gets//////

    // getll all users from db
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

    // get all participants from db
    getAllParticipants: function() {
      return knex
      .select("*")
      .from("participants")
    },

    // get user.name for all participants where user.idevent.id for eventID
    // SELECT first_name, last_name FROM users JOIN participants ON participants.user_id = users.id WHERE participants.event_id = 1;
    getEventParticipants: function(eventID) {
      return knex('users')
      .select('users.first_name', 'users.last_name', 'participants.event_confirmation')
      .join('participants', "users.id", "=", "participants.user_id")
      .where('participants.event_id', eventID)
    },

    // get data for events to display on event summary page
    getSummary: function(url) {
      return knex('events')
      .where('admin_url', url)
      .join('users', 'events.admin_id', '=', 'users.id')
      .select('events.id','event_name', 'event_date', 'url', 'desc', 'users.first_name', 'users.last_name', 'desc', 'admin_url')
    },

    //get data for the public URL only
    publicGetSummary: function(url) {
      return knex('events')
      .where('url', url)
      .join('users', 'events.admin_id', '=', 'users.id')
      .select('events.id','event_name', 'event_date', 'url', 'desc', 'users.first_name', 'users.last_name', 'desc', 'admin_url')
    },

    //DB Inserts
    //////DB Inserts///////

    // Insert new user in users table then assign that user as admin a new event in events table
    createAdminAndEvent: function(firstName, lastName, email, eventName, eventDate, description, newUrl, adminURL) {
      return knex('users')
      .returning('id')
      .insert({first_name: firstName, last_name: lastName, email: email})
      .then((user_id) => {
        return knex('events')
        .insert({event_name: eventName, event_date: eventDate, url: newUrl, admin_id: user_id[0], admin_url: adminURL, desc: description})
      })
    },

    // Insert one new user into users table
    insertUser: function(fname,lname, mail) {
      return knex('users')
      .insert({first_name: fname, last_name: lname, email: mail});
    },

    // Insert user into participants table table
    // INSERT INTO participants (id, event_confirmation, user_id, event_id) VALUES (4,'t', '4', '2');
    insertParticipant: function(firstName, lastName, mail, attending, eventID) {
      return knex('users')
      .returning('id')
      .insert({first_name: firstName, last_name: lastName, email: mail})
      .then((user_id) => {
        return knex('participants')
        .insert({event_confirmation: attending, user_id: user_id[0], event_id: eventID})
      })
    }
  }
}
