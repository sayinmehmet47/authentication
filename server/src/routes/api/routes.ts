const express = require('express');
const router = express.Router();
const getUsers = require('../../controller/UserController').getUsers;
const getUser = require('../../controller/UserController').getUser;
const register = require('../../controller/UserController').register;

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/auth/register', register);

module.exports = router;
