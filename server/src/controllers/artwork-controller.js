const { Artwork } = require("../../db/models/artwork.js");
const { category } = require("../../db/models/categories.model.js");
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
    } catch (err) {
      res.send(err);
    }
  },
  getAll: async (req, res) => {
    try {
      //retrieving the category with name provided by the artist

      //creating the new artwork

      const artwork = await Artwork.findAll({
        where: { category_id: req.params.id },
      });
      //sending the artwork as response
      res.send(artwork);
    } catch (err) {
      res.send(err);
    }
  },
};

// "nameArtwork": "CRY BABY",
// "description": "DIGITAL ART AND ILLUSTRATION",
// "imageUrl": "bensalemwalid.com/wp-content/uploads/2021/02/cry-baby-artwork-by-bensalem-walid.png",
// "price": "3000",
// "artist_id": "1",
// "categoryName": "Digital Paintings"
// }