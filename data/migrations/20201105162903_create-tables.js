exports.up = function(knex) {
  return knex.schema
    .createTable('Recipes', tbl => {
        tbl.increments()
        tbl.string('Recipe_Name', 128)
            .notNullable();
    })
    .createTable('Ingredients', tbl => {
        tbl.increments()
        tbl.string('Ingredient_Name')
            .notNullable();
    })
    .createTable('Steps', tbl => {
        tbl.increments()
        tbl.integer('Steps')
            .notNullable()
        tbl.string('Instructions')
            .notNullable()
        tbl.float('Quantities')
        tbl.integer('Ingredient_ID')
            .unsigned()
            .references('id')
            .inTable('Ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('Recipe_ID')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('Recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Steps')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')
};
