const { login } = require("./loginHandler");
const { register } = require("./registerHandler");
const { musicController } = require("./musicHandler");
const { uploadMusic, deleteMusic, allMySongs } = require("./userHandler");
module.exports = {
  login,
  register,
  musicController,
  uploadMusic,
  deleteMusic,
  allMySongs,
};
