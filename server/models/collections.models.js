const mongoose = require("mongoose");

const CollectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
    minlength: [3, "Collection Name must be at least 3 characters long"],
  },

  releaseDate: {
    type: String,
    required: [true, "A release date is required"],
    minlength: [3, "A release date must be at least 3 characters"],
  },

  price: {
    type: String,
    required: [true, "A price is required"],
  },
});

module.exports.Collection = mongoose.model("Collection", CollectionSchema);
