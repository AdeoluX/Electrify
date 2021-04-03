const { sendTokenResponse } = require("./loginHandler");
const asyncHandler = require("../middleware/async");

const User = require("../models/User");
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log(req.body.email);
  //   const user = await User.create({
  //     name,
  //     email,
  //     password,
  //     role,
  //   });
  const user = await User.create(req.body);
  console.log(user);
  sendTokenResponse(user, 200, res);
});

module.exports = {
  register,
};
