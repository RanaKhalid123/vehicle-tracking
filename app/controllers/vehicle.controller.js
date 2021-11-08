const httpStatus = require('http-status');
const constants = require('../utils/constants');
const vehicleService = require('../services/vehicle.service')


// Register new vehicle
exports.register = async (req, res) => {
  const { name, model, deviceId } = req.body
  //validation
  if(!name || !model || !deviceId) return res.status(httpStatus.NOT_FOUND).json({message: constants.ValidationError, status: httpStatus.NOT_FOUND, data: []});
  const vehicle = await vehicleService.vehicleRegister(req.body);
  return res.status(vehicle.status).json({message: vehicle.message, status: vehicle.status, data: vehicle.data});
};

// Get all registered Vehicle 
exports.findAll = async (req, res) => {
  const vehicles = await vehicleService.findAll();
  return res.status(vehicles.status).json({message: vehicles.message, status: vehicles.status, data: vehicles.data});
};

// Retrieve vehicle's current position during certain time 
exports.vehiclePosition = async (req, res) => {
  const { vehicleId, startDate, endDate } = req.params
  //validation
  if(!vehicleId || !startDate || !endDate) return res.status(httpStatus.NOT_FOUND).json({message: constants.ValidationError, status: httpStatus.NOT_FOUND, data: []});
  //fetch all vehicles
  const positions = await vehicleService.vehiclePosition(req.params);
  return res.status(positions.status).json({message: positions.message, status: positions.status, data: positions.data});
};

// Update vehicle current position
exports.updatePosition = async (req, res) => {
  const { vehicleId, deviceId, lat, long } = req.body
  //validation
  if(!vehicleId || !deviceId || !lat || !long) return res.status(httpStatus.NOT_FOUND).json({message: constants.ValidationError, status: httpStatus.NOT_FOUND, data: []});
    //update vehicles position
    const vehicle = await vehicleService.updatePosition(req.body);
    return res.status(vehicle.status).json({message: vehicle.message, status: vehicle.status, data: vehicle.data});
};
