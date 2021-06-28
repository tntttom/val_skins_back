const CollectionsController = require("../controllers/collections.controller");
const { Collection } = require("../models/collections.models");

module.exports = function (app) {
  app.get("/api/collections", CollectionsController.getCollections);
  app.get("/api/collections/:id", CollectionsController.getCollection);
  app.post("/api/collections/new", CollectionsController.createCollection);
  app.put("/api/collections/:id", CollectionsController.updateCollection);
  app.delete("/api/collections/:id", CollectionsController.deleteCollection);
};
