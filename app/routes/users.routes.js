const controller = require('../controllers/users.controller');
const { Router } = require('express');

const routes = new Router();

routes.get('/', controller.getAllUsers);
// routes.get('/:id', controller.getUserById);
// routes.post('/', controller.createUser);
// routes.put('/:id', controller.UpdateUser);
// routes.delete('/:id', controller.DeleteUser);

module.exports = routes;
