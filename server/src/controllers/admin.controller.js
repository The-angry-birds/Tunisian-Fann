const { category } = require("../../db/models/categorie.model");

//get all categories
exports.getCategories = async function (req, res) {
  try {
    const data = await category.findAll();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.storeCategory = async function (req, res) {
  const createategory = new category({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const savecategory = await createategory.save();

    res.send(create);
  } catch (err) {
    res.send(err);
  }
};
exports.deleteCategory = async function (req, res) {
  try {
    const delet = await category.destroy({ where: { id: req.params.id } });
    console.log(delet);
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};
//update category
exports.updateCategory = async function (req, res) {
  try {
    const update = await category.update(
      {
        name: req.body.name,
        description: req.body.description,
        ImageUrl: req.body.ImageUrl,
      },
      { where: { id: req.params.id } }
    );
    res.send(update);
    console.log(update);
  } catch (err) {
    console.log(err);
  }
};
//get one category by id
exports.getCategory = async function (req, res) {
  try {
    var oneCatgory = await category.findOne({ where: { id: req.params.id } });
    res.send(oneCatgory);
  } catch (err) {
    console.log(err);
  }
};
