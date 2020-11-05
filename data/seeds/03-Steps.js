
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {Steps: 1, Instructions: 'Crack Egg', Quantities: 2, Ingredient_ID: 1, Recipe_ID: 1},
        {Steps: 2, Instructions: 'Add milk', Quantities: 1, Ingredient_ID: 2, Recipe_ID: 1},
        {Steps: 3, Instructions: 'Add salt', Quantities: .5, Ingredient_ID: 6, Recipe_ID: 1},
        {Steps: 4, Instructions: 'Add pepper', Quantities: .5, Ingredient_ID: 7, Recipe_ID: 1},
        {Steps: 5, Instructions: 'Scramble', Quantities: null, Ingredient_ID: null, Recipe_ID: 1},
      ]);
    });
};
