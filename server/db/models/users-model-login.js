const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const usersSchema = (sequelize, type) => {
    const myusers = sequelize.define(
      "users",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
     
     
        firstName: type.STRING,
        lastName: type.STRING,
        email: type.STRING,
        password: type.STRING,
        imageUrl: type.STRING,
      },
 
      { timestamps: false }
    );
    return myusers;
  };
  
  let usersLogin = usersSchema(sequelize, Sequelize);
  
  module.exports = { usersLogin };