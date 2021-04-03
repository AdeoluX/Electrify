const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  name: String,
  description: String,
  music_picture: String,
  filePath: String,
  likes: [
    {
      user: String,
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Music", musicSchema);
