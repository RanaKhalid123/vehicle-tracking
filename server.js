var express = require('express');
require('dotenv').config();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())


const db = require('./app/models/index');
  
// force: true will drop the table if it already exists but its false
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

require('./app/route/vehicle.route')(app);
 
// Create a Server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://localhost", host, port)
})

module.exports = app;