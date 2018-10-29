const express = require('express');
const router = express.Router();

const pointController = require('../controllers/point.controller');

//Testing Communications
router.get('/test', pointController.test);
//Create Point
router.post('/create', pointController.pointCreate);
//Read Points
router.get('/readAll', pointController.readPoint);
//Update Point
router.put('/:id/update', pointController.updatePoint);
//Delete Point
router.delete('/:id/delete', pointController.deletePoint);

module.exports = router;