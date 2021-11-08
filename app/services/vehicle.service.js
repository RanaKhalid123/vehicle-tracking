const { Op } = require('sequelize');
const db = require("../models");
const httpStatus = require('http-status');
const constants = require('../utils/constants');
const Vehicle = db.vehicles;
const Location = db.locations;  

// Register new vehicle
exports.vehicleRegister = async (vehiclePayload) => {
  const { deviceId } = vehiclePayload
  //check if there is any vehicle registered with this deviceId
  const alreadyRegistered = await Vehicle.findOne({where: {deviceId: deviceId}})
  if(alreadyRegistered) return {message: constants.VehicleAlreadyRegistered, status: httpStatus.CONFLICT, data: []}; 
  //registering vehicle
  return Vehicle.create(vehiclePayload)
    .then((vehicle) => {
      console.log(constants.Registered);
      return {message: constants.Registered, status: httpStatus.CREATED, data: vehicle}; 
    })
    .catch((err) => {
      console.log(contants.RegistrationError, err);
      return {message: constants.RegistrationError, status: httpStatus.INTERNAL_SERVER_ERROR, data: []}; 
    });
};

// Get all registered Vehicle 
exports.findAll = async () => {
  const vehicles = await Vehicle.findAll();
  return {message: constants.VehicleFetched, status: httpStatus.OK, data: vehicles};
};

// Retrieve vehicle's current position during certain time 
exports.vehiclePosition = async (params) => {
  const { vehicleId, startDate, endDate } = params
  //Check if vehicleId is valid
  const isValidVehicleId = await Vehicle.findById(parseInt(vehicleId))
  if(!isValidVehicleId) return {message: constants.VehicleNotValid, status: httpStatus.NOT_FOUND, data: []};
  const condition = {
    vehicleId: parseInt(vehicleId),
    createdAt: {
      [Op.between]: [startDate, endDate]   
    }
  };
  const positions = await Location.findAll({where: condition});
  return {message: constants.VehiclePositions, status: httpStatus.OK, data: positions};
};

// Update vehicle current position
exports.updatePosition = async (positionPayload) => {
  const { vehicleId, deviceId } = positionPayload
  //check if device is associated only with vehicle
  const isDevice = await Vehicle.findOne({where: {id: vehicleId, deviceId: deviceId}})
  if(!isDevice) return {message: constants.VehicleDeviceAssociationError, status: httpStatus.INTERNAL_SERVER_ERROR, data: []};
  //updating the vehicle current position
    return Location.create(positionPayload).then((vehicle) => {
        return{message: constants.VehiclePositionUpdated, status: httpStatus.CREATED, data: vehicle};
      })
      .catch((err) => {
        return {message: constants.VehiclePositionUpdatedError, status: httpStatus.INTERNAL_SERVER_ERROR, data: []};
      });
};
