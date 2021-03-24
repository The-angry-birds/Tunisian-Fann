const Sequelize = require("sequelize");
const { sequelize } = require("../index");

const likesSchema = (sequelize, type) => {
  const mylikes = sequelize.define(
    "likes",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username_id: type.STRING,
      artwork_id: type.STRING,
    },
    { timestamps: false }
  );
  return mylikes;
};

let likes = likesSchema(sequelize, Sequelize);

module.exports = { likes };
