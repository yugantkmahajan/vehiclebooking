const mongoose = require('mongoose')

const Formschema = new mongoose.Schema({
  
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
         required: true
    },
    wheels:{
        type: String,
        required: true
    },
    vehicaltype:{
        type: String,
        required: true
    },
    vehicalmodel:{
        type: String,
        required: true
    },
    Startdate:{
        type: Date,
        required: true
    },
    Enddate:{
        type: Date,
        required: true
    }

})
const Form = mongoose.model('FormDetails',Formschema)
module.exports = Form