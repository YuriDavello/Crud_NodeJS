const controller = require('../controllers/users.controller');
const { Router } = require('express');

const routes = new Router();

routes.get('/', controller.getAllUsers);
routes.get('/:id', controller.getUserById);
routes.post('/', controller.createUser);
routes.put('/:id', controller.updateUser);
routes.delete('/:id', controller.deleteUser);

module.exports = routes;
