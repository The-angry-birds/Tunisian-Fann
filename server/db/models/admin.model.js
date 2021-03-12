const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const adminSchema = (sequelize, type) => {
  const myadmin = sequelize.define(
    "admin",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: type.STRING,
      password: type.STRING,
    },
    { timestamps: false }
  );
  return myadmin;
};

let Admin = adminSchema(sequelize, Sequelize);

module.exports = { Admin };
