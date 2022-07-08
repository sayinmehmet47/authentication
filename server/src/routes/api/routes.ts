const express = require('express');
const router = express.Router();
const getUsers = require('../../controller/UserController').getUsers;
const getUser = require('../../controller/UserController').getUser;
const addUser = require('../../controller/UserController').addUser;

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/users', addUser);

module.exports = router;
