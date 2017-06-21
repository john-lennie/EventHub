
exports.up = function(knex, Promise) {
  return knex.schema.createTable('participants', function (table) {
    table.increments();
    table.boolean('event_confirmation');
    table.integer('user_id').references('id').inTable('users');
    table.integer('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('participants', function (table) {
  });
};
