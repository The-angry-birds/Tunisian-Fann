const { Artwork } = require("../../db/models/artwork.js");
const { category } = require("../../db/models/categories.model.js");
const { Artist } = require("../../db/models/artist.js");
const config = require("../../db/configArtist");
const jwt = require("jsonwebtoken");
module.exports = {
  create: async (req, res) => {
    try {
      //retrieving the category with name provided by the artist
      const categoryData = await category.findOne({
        where: { name: req.body.categoryName },
      });
      //creating the new artwork
      const artwork = await Artwork.create({
        artist_id: req.body.artist_id,
        category_id: categoryData.id,
        nameArtwork: req.body.nameArtwork,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
      });
      //sending the artwork as response
      res.send(artwork);

      console.log(artwork);
    } catch (err) {
      res.send(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const email = jwt.verify(token, config.secret);
      console.log("===============", email);
      const artist = await Artist.findOne({
        where: { email: email.email },
      });
      //retrieving the category with name provided by the artist

      //creating the new artwork

      const artwork = await Artwork.findAll({
        where: { category_id: req.params.id, artist_id: artist.id },
      });
      //sending the artwork as response
      res.send(artwork);
    } catch (err) {
      res.send(err);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const toDelete = await Artwork.destroy({ where: { id: req.params.id } });

      res.send("deleted");
    } catch (err) {
      res.send(err);
    }
  },
  updateArtwork: async (req, res) => {
    try {
      const categoryData = await category.findOne({
        where: { name: req.body.categoryName },
      });
      //creating the new artwork

      const artwork = await Artwork.update(
        {
          category_id: categoryData.id,
          nameArtwork: req.body.nameArtwork,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
        },
        { where: { id: req.params.id } }
      );

      res.send("updated");
    } catch (err) {
      res.send(err);
    }
  },

  getAllartworks: async (req, res) => {
    try {
      const artworks = await Artwork.findAll({
        // order: [["id", "DESC"]],
      });
      res.send(artworks);
    } catch (err) {
      console.log(err);
    }
  },
  getOneartwork: async (req, res) => {
    try {
      const artwork = await Artwork.findOne({
        where: { id: req.params.id },
      });
      res.send(artwork);
    } catch (err) {
      console.log(err);
    }
  },
};
