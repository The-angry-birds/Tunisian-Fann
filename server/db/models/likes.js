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
     user_id:type.INTEGER,
      artwork_id: type.STRING,
    },
    { timestamps: false }
  );
  return mylikes;
};

let Likes = likesSchema(sequelize, Sequelize);

module.exports = { Likes };
