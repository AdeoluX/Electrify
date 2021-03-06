const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { response } = require("../utils/apiResponder");

const Music = require("../models/Music");
const User = require("../models/User");
//const userController = {
const uploadMusic = asyncHandler(async (req, res, next) => {
  const { name, description, music_picture, filePath } = req.body;
  const { id } = req.user;
  try {
    let song = await Music.create({
      name,
      description,
      music_picture,
      filePath,
      owner: id,
    });

    let user = await User.findById({ _id: id });
    user.music.push(song._id);
    user.save();

    response(201, song, res);
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
});
const allMySongs = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.user;
    let user = await User.findById({ _id: id }).populate("music");
    response(200, user.music, res);
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
});
const deleteMusic = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    //cons = req.body
    let music = await Music.findById({ _id: req.body.id });
    console.log(music);
    if (music.owner == id) {
      console.log("Innn");
      await Music.findOneAndDelete({ _id: req.body.id });
    }
    response(200, music, res);
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
});
//};

module.exports = {
  uploadMusic,
  deleteMusic,
  allMySongs,
};
