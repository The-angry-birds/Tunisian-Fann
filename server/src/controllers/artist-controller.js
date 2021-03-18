const { Artist } = require("../../db/models/artist.js");

exports.getArtist = async function (req, res) {
    try {
      const artists= await Artist.findAll({});
  
      res.send(artists);
      console.log("==========>",artists);
    } catch (err) {
      console.log(err);
    }
  };