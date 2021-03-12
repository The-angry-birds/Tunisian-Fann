module.exports = (sequelize, type) => {
  return sequelize.define(
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
    { timestamps: true }
  );
};
