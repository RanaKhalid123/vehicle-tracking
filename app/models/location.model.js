module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("location", {
    lat: {
      type: DataTypes.FLOAT(10,6)
    },
    long: {
      type: DataTypes.FLOAT(10,6)
    }
  });

  return Location;
};
