const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const musicController = {
  getAllMusic: asyncHandler(async (req, res, next) => {}),

  likeMusic: asyncHandler(async (req, res, next) => {}),
};

module.exports = {
  musicController,
};
