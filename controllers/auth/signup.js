const { User } = require("../../models/user");
const { createError } = require("../../helpers/createError");
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");
const sendMail = require("../../helpers/sendMail");
const idGenerate = require("bson-objectid");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword = await bcryptjs.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = idGenerate();
  const result = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Confirm</a>`,
  };
  await sendMail(mail);
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = signup;
