const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const usersSignupschema = (sequelize, type) => {
    const myusersSignup = sequelize.define(
      "usersSignup",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName:type.STRING,
        lastName :type.STRING,
        email: type.STRING,
        password: type.STRING,
      },
      { timestamps: false }
    );
    return myusersSignup;
  };
  
  let User = usersSignupschema(sequelize, Sequelize);
  
  module.exports = { User };