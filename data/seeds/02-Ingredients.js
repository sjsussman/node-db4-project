
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {Ingredient_Name: 'Eggs'},
        {Ingredient_Name: 'Milk'},
        {Ingredient_Name: 'Butter'},
        {Ingredient_Name: 'Flour'},
        {Ingredient_Name: 'Sugar'},
        {Ingredient_Name: 'Salt'},
        {Ingredient_Name: 'Pepper'},
      ]);
    });
};
