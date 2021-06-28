const { Collection } = require("../models/collections.models");

// Collections Controller

module.exports.createCollection = (req, res) => {
  Collection.create(req.body)
    .then((createdCollection) => res.json(createdCollection))
    .catch((err) => res.json(err));
};

module.exports.getCollections = (req, res) => {
  Collection.find({})
    .then((collections) => res.json(collections))
    .catch((err) => res.json(err));
};

module.exports.getCollection = (req, res) => {
  Collection.find({ _id: req.params.id })
    .then((collection) => res.json(collection))
    .catch((err) => res.json(err));
};

module.exports.updateCollection = (req, res) => {
  Collection.findOneAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
    new: true,
  })
    .then((updatedCollection) => res.json(updatedCollection))
    .catch((err) => res.json(err));
};

module.exports.deleteCollection = (req, res) => {
  Collection.deleteOne({ _id: req.params.id })
    .then((deletedCollection) => res.json(deletedCollection))
    .catch((err) => res.json(err));
};
