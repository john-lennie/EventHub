
exports.up = function(knex, Promise) {
  return knex.schema.table('events', function (table) {
    table.string("admin_url");
    table.unique(['admin_url']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', function (table) {
    table.dropColumn("admin_url");
  });
};


