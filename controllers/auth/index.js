const signup = require("./signup");
const signin = require("./signin");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subUpdate = require("./subUpdate");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  signin,
  getCurrent,
  logout,
  subUpdate,
  verifyEmail,
  resendVerifyEmail,
};
