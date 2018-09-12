var Sequelize = require("sequelize");

var sequelize = new Sequelize("burger", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
})

module.exports = sequelize;