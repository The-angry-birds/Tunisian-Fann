const Router = require("express").Router();

const controller = require("../controllers/admin-controller");

Router.get("/", controller.getCategories);
Router.get("/:id", controller.getCategoriesById9);
Router.post("/", controller.storeCategory);
Router.delete("/:id", controller.deleteCategory);
Router.put("/:id", controller.updateCategory);

module.exports = Router;
