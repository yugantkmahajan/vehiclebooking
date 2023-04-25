const mongoose = require('mongoose')

const Carschema = new mongoose.Schema({
  
    CarName:{
        type: String,
        required: true
    },
    CarType:{
        type: String,
         required: true
    },
    CarNumber:{
        type: Number,
        // required: true
    },
    Booking:{
        type: String,
        // required: true
    }

})

const Bikeschema = new mongoose.Schema({
  
    BikeName:{
        type: String,
        required: true
    },
    BikeType:{
        type: String,
         required: true
    },
    BikeNumber:{
        type: Number,
        // required: true
    },
    Booking:{
        type: String,
        // required: true
    }

})
const VehicleCar = mongoose.model('VehicleCarDetails',Carschema)
const vehicleBike = mongoose.model('VehicleBikeDetails',Bikeschema)
module.exports = {VehicleCar,vehicleBike}