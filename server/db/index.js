const Sequelize = require("sequelize");

// const admin = require("./models/admin.model");
const {
  DATABASE_NAME,
  USERNAME,
  PASSWORD,
  HOST,
  DIALECT,
} = require("./constant");

const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created here!`);
});

module.exports = {
  sequelize,
};
