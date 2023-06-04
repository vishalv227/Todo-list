const { application } = require('express');
const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
const usersController = require('../controllers/users_controller');

router.get('/', homeController.home);
router.post('/create-task', usersController.task);
router.post('/delete-task', usersController.delete);

module.exports = router;

console.log("Router loaded");