const { DataTypes } = require("sequelize");
const SQLconnection = require("../db/connection");

const Genre = SQLconnection.define("Genre", {
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Genre;