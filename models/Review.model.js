const { Schema, model } = require("mongoose");
const reviewSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  travel: {
    type: Schema.Types.ObjectId,
    ref: "Travel",
  },
});

const Review = model("Review", reviewSchema);
module.exports = Review;
