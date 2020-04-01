//Product table structure 
exports.up = function(knex) {
  	return knex.schema.createTable('products', function (table) {
		table.increments()
		table.string('title').notNullable()
		table.string('description').notNullable()
		table.decimal('value').notNullable()
  	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('products')
};
