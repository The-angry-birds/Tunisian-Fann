const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const myCategory = (sequelize, type) => {
  const category = sequelize.define(
    "category",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: type.STRING,
      description: type.STRING,
      ImageUrl: type.STRING,
    },
    { timestamps: false }
  );
  return category;
};

let category = myCategory(sequelize, Sequelize);

module.exports = { myCategory };
