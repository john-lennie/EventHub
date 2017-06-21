exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: 'Vasiliy', last_name: "Klimkin", email: "vasily.klimkin@gmail.com"}),
        knex('users').insert({first_name: 'John', last_name: "Lennie", email: "john.lennie@gmail.com"}),
        knex('users').insert({first_name: 'David', last_name: "Chasteau", email: "david.chasteau@gmail.com"})
        //knex('users').insert({id: 2, name: 'Bob'}),
        //knex('users').insert({id: 3, name: 'Charlie'})
      ]);
    });
};
