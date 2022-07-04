const getCurrent = async (req, res) => {
  const { email, name } = req.user;
  console.log();
  res.json({
    email,
    name,
  });
};

module.exports = getCurrent;
