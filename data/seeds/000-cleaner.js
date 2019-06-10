const cleaner = require("knex-cleaner"); //import

exports.seed = function(knex) { //export
  return cleaner.clean(knex)
};
