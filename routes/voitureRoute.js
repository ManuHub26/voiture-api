const router = require('express').Router();
const voitureCtrl = require('../controllers/voitureController')

router.get('/allcars', voitureCtrl.selectAllCars);
router.get('/:id/car', voitureCtrl.selectCar);
router.post('/create', voitureCtrl.createCar);
router.put('/:id/update', voitureCtrl.updateCar);
router.delete('/:id/delete', voitureCtrl.deleteCar);

module.exports = router;