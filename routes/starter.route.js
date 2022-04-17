const express = require('express');
const { getStarter } = require('../controllers/starter.controller');
const staterRouter = express.Router();


staterRouter.get('/', getStarter);

module.exports = staterRouter