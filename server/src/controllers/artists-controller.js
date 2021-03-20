const { Artist } = require("../../db/models/artist.js");

exports.getArtist = async function (req, res) {
  try {
    const artists = await Artist.findAll({});
    res.send(artists);
  } catch (err) {
    console.log(err);
  }
};
exports.deleteArtist = async function (req, res) {
  try {
    const delet = await Artist.destroy({ where: { id: req.params.id } });
    console.log(delet);
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};
