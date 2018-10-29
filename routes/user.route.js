const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

//Testing Communications
router.get('/test', userController.test);
router.post('/create', userController.create);
router.get('/readAll', userController.readUsers);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);


module.exports = router;