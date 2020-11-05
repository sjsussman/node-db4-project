const express = require('express')
const recipeRouter = require('./routes/recipeRouter')
const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);


module.exports = server;