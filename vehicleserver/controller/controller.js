const Form = require('../model/Form')
const _ = require('lodash')
const { VehicleCar, vehicleBike } = require('../model/Vehicles')
exports.submitform = async (req, res) => {
    const form = new Form(_.pick(req.body, ['firstname', 'lastname','wheels','vehicaltype','vehicalmodel','Startdate','Enddate']))
    await form.save()
    console.log(form)
    res.send(form)
}

exports.addcar = async (req, res) => {
    const car = new VehicleCar(_.pick(req.body, ['CarName', 'CarType']))
    await car.save()
    console.log(car)
    res.send(car)
}

exports.addbike = async (req, res) => {
    const bike = new vehicleBike(_.pick(req.body, ['BikeName', 'BikeType']))
    await bike.save()
    console.log(bike)
    res.send(bike)
}

exports.vehicletype = async (req, res) => {
	try {
        let vehtype;
        if(2 == req.params.id)
        {
		 vehtype = await vehicleBike.distinct("BikeType")
        }
        else if(4==req.params.id)
        {
            vehtype = await VehicleCar.distinct("CarType")
        }
		res.send(vehtype)
	} catch(error){
		res.status(404)
		res.send(error)
	}
}


exports.vehicleList = async (req, res) => {
    console.log('hello')
	try {
        let vehtype;
        if(2 == req.params.id)
        {
		 vehtype = await vehicleBike.find({BikeType:req.params.type},{_id:0,__v:0})
        }
        else if(4 == req.params.id)
        {
         vehtype = await VehicleCar.find({CarType:req.params.type},{_id:0,__v:0})
        }
		res.send(vehtype)
	} catch(error){
		res.status(404)
		res.send(error)
	}
}