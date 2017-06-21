
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function (table) {
    table.increments();
    table.string('event_name');
    table.date('event_date');
    table.string('url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('admin_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events', function (table) {
  });
};
