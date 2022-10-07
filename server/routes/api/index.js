const router = require('express').Router();
const userRoutes = require('./user');
const recipeRoutes = require('./recipes');
const spoonacularRoutes = require('./spoonacular');

router.use('/user', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/spoonacular', spoonacularRoutes);

module.exports = router;
