module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("vehicle", {
    name: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    deviceId: {
      type: DataTypes.STRING
    },
  });

  return Vehicle;
};
