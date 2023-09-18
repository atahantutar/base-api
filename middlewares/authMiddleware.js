const users = require("../models/userModel");

const authenticateUser = async (req, res, next) => {
  try {
    const userCheck = users.findOne(req.session.userId);
    if (!userCheck) res.redirect("/login");
    next();
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { authenticateUser };
