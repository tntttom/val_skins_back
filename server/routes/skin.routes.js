const SkinController = require("../controllers/skins.controller");
const { Skin } = require("../models/skins.models");

module.exports = function (app) {
  app.get("/api/skins", SkinController.getSkins);
  app.get("/api/skins/:id", SkinController.getSkin);
  app.get(
    "/api/skins/collections/:collectionId",
    SkinController.getSkinByCollection
  );
  app.post("/api/skins/new", SkinController.createSkin);
  app.put("/api/skins/:id", SkinController.updateSkin);
  app.delete("/api/skins/:id", SkinController.deleteSkin);
};
