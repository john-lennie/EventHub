exports.seed = function(knex, Promise) {
    return Promise.all([
              // Inserts seed entries
      knex('users').insert({id: 1, first_name: 'Vasiliy', last_name: "Klimkin", email: "vasily.klimkin@gmail.com"}),
      knex('users').insert({id: 2, first_name: 'John', last_name: "Lennie", email: "john.lennie@gmail.com"}),
      knex('users').insert({id: 3, first_name: 'David', last_name: "Chasteau", email: "david.chasteau@gmail.com"}),
      knex('users').insert({id: 4, first_name: 'Jean', last_name: "Jones", email: "jean_jones@gmail.com"}),
      knex('users').insert({id: 5, first_name: 'Tudor', last_name: "Manole", email: "tmanole@gmail.com"}),
      knex('users').insert({id: 6, first_name: 'Allen', last_name: "Harper", email: "allenharper@gmail.com"})

    ])
    .then(()=> {
      return Promise.all([
        knex('events').insert({id: 1, event_name: "Vasily's big Party!", event_date: '2017-07-22', url: 'b2xVn2', admin_id: 1, desc: "SUPER AWESOME PARTY AT VASILIYS"}),
        knex('events').insert({id: 2, event_name: "Johns's RAVE!!!", event_date: '2017-07-02', url: 'L3xETx', admin_id: 2, desc: "SUPER AWESOME RAVE AT JOHNS HOUSE"})
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('participants').insert({id: 1, event_confirmation: 1, user_id: 3, event_id: 1}),
        knex('participants').insert({id: 2, event_confirmation: 1, user_id: 4, event_id: 1}),
        knex('participants').insert({id: 3, event_confirmation: 1, user_id: 5, event_id: 1})
      ])
    }).catch((err) => console.error(err));
};
