const dbConfig = require("../config/env");
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

//creating database if does not exist already
(async function () {
  await mysql.createConnection({
    user     : dbConfig.username,
    password : dbConfig.password
}).then((connection) => { connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database};`)});
})();

//creating database connection 
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);
db.locations = require("./location.model.js")(sequelize, Sequelize);

//relationship between locations & vehicles
db.vehicles.hasMany(db.locations, { as: "locations" });
db.locations.belongsTo(db.vehicles, {
  foreignKey: "vehicleId",
  as: "vehicle",
});

module.exports = db;
