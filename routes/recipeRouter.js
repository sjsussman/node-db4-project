const express = require('express')
const { getShoppingList } = require('./recipe-model.js')
const Recipes = require('./recipe-model.js')
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getAllRecipes()
    .then(recipes => {
        console.log(recipes)
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            message:'Failed to get recipes', message: err.message
        })
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(shoppingList => {
        console.log(shoppingList)
        res.status(200).json(shoppingList)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(instructions => {
        res.status(200).json(instructions)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})


module.exports = router;