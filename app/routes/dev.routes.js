const controller = require('../controllers/dev.controller');
const { Router } = require('express');

const routes = new Router();

routes.get('/version', controller.version);

module.exports = routes;
