const { category } = require("../../db/models/categories.model");

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
}
exports.deleteCategory = async function (req, res) {
  try {
    const delet = await category.destroy({ where: { id: req.params.id } });
    console.log(delet);
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};
exports.updateCategory = async function (req, res) {
  // const updateCase = await Cases.findOne({ where: { id: req.params.id}})
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
