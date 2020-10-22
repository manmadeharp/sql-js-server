const routes = require('express').Router();
const routerController = require('../controllers/connectcontrollers')
routes.get('/', routerController.getIndex);
routes.get('/StaffMember', routerController.GetStaffMember);
module.exports = routes;