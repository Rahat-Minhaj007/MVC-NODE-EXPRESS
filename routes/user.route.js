const express = require('express');
const { getUsers, createUser } = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/users', getUsers);

userRouter.post('/users', createUser);

module.exports = userRouter;