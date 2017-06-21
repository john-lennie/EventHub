
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('name');
    table.string("first_name");
    table.string("last_name");
    table.string("email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('first_name');
    table.dropColumn('last_name');
    table.dropColumn('email');
    table.string("name");
  });
};
