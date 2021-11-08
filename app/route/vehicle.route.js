module.exports = function(app) {

    const vehicle = require('../controllers/vehicle.controller.js');
    // register vehicle
    app.post('/api/vehicle/register', vehicle.register);

    // Update vehicle current position
    app.post('/api/vehicle/update-position', vehicle.updatePosition);

    // Retrieve all registered vehicles
    app.get('/api/vehicle/all-vehicles', vehicle.findAll);
  
    // Retrieve vehicle's current position during certain time
    app.get('/api/vehicle/vehicle-position/:vehicleId/:startDate/:endDate', vehicle.vehiclePosition);
}
