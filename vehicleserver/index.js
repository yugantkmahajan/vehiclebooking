const express = require('express');
const router = require('./routes/routes');
const connection = require('./config/dbconnect');
var cors = require('cors');


const app = express();
app.use(cors());
// const bodyparser = require('body-parser')
connection()
app.use(express.json())

app.use(router)

app.listen(2700,()=>{
    console.log('server started')
});
