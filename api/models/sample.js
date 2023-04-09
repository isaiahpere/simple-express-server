// sample mongoose schema - created to complet ethe MVC model

const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  personalityId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Place",
  },
  image: [
    {
      url: String,
      filename: String,
    },
  ],
});

const SampleModel = mongoose.model("Sample", sampleSchema);

exports.module = SampleModel;
