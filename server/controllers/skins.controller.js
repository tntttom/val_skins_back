const { Skin } = require("../models/skins.models");
var ObjectId = require("mongodb").ObjectId;

// Skins Controller

module.exports.createSkin = (req, res) => {
  Skin.create(req.body)
    .then((createdSkin) => res.json(createdSkin))
    .catch((err) => res.json(err));
};

module.exports.getSkins = (req, res) => {
  Skin.find({})
    .then((skins) => res.json(skins))
    .catch((err) => res.json(err));
};

module.exports.getSkin = (req, res) => {
  Skin.find({ _id: req.params.id })
    .then((skin) => res.json(skin))
    .catch((err) => res.json(err));
};

module.exports.getSkinByCollection = (req, res) => {
  Skin.find({
    collectionName: ObjectId(`${req.params.collectionId}`),
  })
    .then((skins) => res.json(skins))
    .catch((err) => res.json(err));

  console.log(ObjectId(`${req.params.collectionId}`));
};

module.exports.updateSkin = (req, res) => {
  Skin.findOneAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
    new: true,
  })
    .then((updatedSkin) => res.json(updatedSkin))
    .catch((err) => res.json(err));
};

module.exports.deleteSkin = (req, res) => {
  Skin.deleteOne({ _id: req.params.id })
    .then((deletedSkin) => res.json(deletedSkin))
    .catch((err) => res.json(err));
};
