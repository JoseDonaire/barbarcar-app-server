const { Schema, model } = require("mongoose");

const travelSchema = new Schema({
  date: {
    type: String,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  bags: {
    type: Number,
  },
  seatsCar: {
    type: Number,
  },
  price: {
    type: Number,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  navigator: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Travel = model("Travel", travelSchema);
module.exports = Travel;
