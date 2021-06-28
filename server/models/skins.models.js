const mongoose = require("mongoose");

const SkinSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
    },
    weapon: {
      type: String,
      required: [true, "A weapon is required"],
      minlength: [3, "A weapon name must be at least 3 characters long"],
    },
    collectionName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    price: {
      type: String,
      required: [true, "A price is required"],
    },
    tier: {
      type: String,
    },

    imgUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Skin = mongoose.model("Skin", SkinSchema);
