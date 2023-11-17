const { DataTypes } = require("sequelize");
const SQLconnection = require("../db/connection");

const Author = SQLconnection.define("Author", {
  author_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Author;