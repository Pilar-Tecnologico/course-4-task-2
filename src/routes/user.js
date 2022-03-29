const express = require('express');
const { newUser, getUsers } = require('../controllers/user.controller');
const router = express.Router();

router.post('/newuser', newUser);
router.get('/', getUsers);

module.exports = router