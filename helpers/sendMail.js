const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SG_KEY } = process.env;

sgMail.setApiKey(SG_KEY);

const sendMail = async (data) => {
  const mail = { ...data, from: "mega_sendgrid@ukr.net" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;
