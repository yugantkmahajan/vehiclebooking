var router = require("express").Router();
const formcontroller = require('../controller/controller')

router.post('/submitform', formcontroller.submitform)

router.post('/addcar', formcontroller.addcar)

router.post('/addbike', formcontroller.addbike)

router.get('/vehicletype/:id', formcontroller.vehicletype)

router.get('/vehicleList/:id/:type', formcontroller.vehicleList)



module.exports = router