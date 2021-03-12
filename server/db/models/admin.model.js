module.exports = (sequelize, type) => {
  const Admin = sequelize.define("admin", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: type.STRING,
    password: type.STRING,
  },{ timestamps: false });
  return Admin;
};
