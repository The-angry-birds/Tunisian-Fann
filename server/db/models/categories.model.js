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

module.exports = { category };
// category.create({
//   name: "Paintings",  
//   numberOfArtists: 159,
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   ImageUrl:
//     "https://www.theartist.me/wp-content/uploads/2017/08/the-lover-by-rene.jpg",
// });
// category.create({
//   name: "Digital Paintings",
//   numberOfArtists: 170,
//   description:
//     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   ImageUrl:
//     "https://community.wacom.com/eu/wp-content/uploads/2019/03/Andrea-Stangoni-890x400.jpg",
// });
// category.create({
//   name: "Sculptures",
//   numberOfArtists: 98,
//   description:
//     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   ImageUrl:
//     "https://iadsb.tmgrup.com.tr/92b0ce/1200/627/0/42/1000/564?u=https://idsb.tmgrup.com.tr/2019/12/08/1575799266963.jpg",
// });
