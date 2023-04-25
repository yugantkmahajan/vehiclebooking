const mongoose = require("mongoose");
const mongoserver = 'mongodb://127.0.0.1:27017/vbook'
const connection = () => {
  try {
    mongoose.connect(mongoserver,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log('database connected')
  } catch (error) {
    console.log(error)
  }

}

module.exports = connection