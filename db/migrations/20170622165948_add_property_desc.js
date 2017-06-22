
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function (table) {
    table.string("desc");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function (table) {
    table.dropColumn('desc');
  });
};
