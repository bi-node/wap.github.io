const express = require("express");
const bookController = require("../controller/bookController")
const routes = express.Router();


routes.get("/", bookController.getAll)
routes.get("/:id", bookController.getByID)
routes.post("/", bookController.save)
routes.delete("/:id", bookController.deleteByID)
routes.put("/:id", bookController.update)

module.exports = routes;