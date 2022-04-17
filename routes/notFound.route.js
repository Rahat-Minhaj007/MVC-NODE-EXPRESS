const express = require('express');
const { getNotFound } = require('../controllers/notFound.controller');
const notFoundRouter = express.Router()

notFoundRouter.use(getNotFound);

module.exports = notFoundRouter;