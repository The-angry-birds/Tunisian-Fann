const Sequelize = require("sequelize");

const admin = require("./models/admin.model.js");
const category=require("./models/categories.model.js");
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
console.log(admin);
const Admin = admin(sequelize, Sequelize);
const Category=category(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created here!`);
});

module.exports = {
  Admin,Category
};
