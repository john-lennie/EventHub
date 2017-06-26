# EventHub

## Made by

David Chasteau  - davidchasteau@gmail.com
John Lennie     - johnanthonylennie@gmail.com
Vasiliy Klimkin - vasily.klimkin@gmail.com

## Summary

Eventhub is a clone of doodle.com. You can schedule your events and send anonymous links to people you want to invite to the event.
The people can then add themselves to the event and will appear on the participants list. You cannot add yourself twice. If you want to 
change your status of "going" or "not going" to the event, you may do so but you will need to remember the email address you used. This was
done so that we can remove the chaotic implementation of doodle.com where any participant can change other participants status, name, or even 
just delete them all (no more free for alls).

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- body-parser 1.15.2
- dotenv 2.0.0
- ejs 2.4.1
- express 4.13.4
- knex 0.11.7
- knex-logger 0.1.0
- morganb 1.7.0
- node-sass-middleware 0.9.8
- pg 6.0.2

## Used Case

- User goes to page
- User creates an event filling out the form
- User doesn't finish filling the entire form out and the website spits an error
- User fully fills the form out and submits, gets taken to the the summary page where He is given an admin unique URL and a participant unique URL which he/she will share the participant URL with people he/she wants to invite to the event
- User sends participant URL over slack
- Participant goes to URL is shown all information and who is going
- Participant registers
- Later Participant wants to change if he is going or not, goes back to URL clicks the "edit status" button and writes the email he used followed by the new status
- System checks if the email exists in the system, if it does it changes the status for that email.

## Screenshots
