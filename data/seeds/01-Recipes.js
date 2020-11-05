
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {Recipe_Name: 'Scrambled Eggs'},
        {Recipe_Name: 'Cookies'},
        {Recipe_Name: 'Pancakes'}
      ]);
    });
};
