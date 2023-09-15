const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCheck = await user.findOne({ email: email });
    if (!userCheck) {
      res.status(404).json({ message: "User not found." });
    }
    const comparePassword = await bcrypt.compare(password, userCheck.password);
    if (!comparePassword) {
      res
        .status(400)
        .json({ message: "Your password or email address is incorrect." });
    }
    const token = jwt.sign({ id: userCheck._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.header("Authorization", token).json({ accessToken: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const register = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const userCheck = await user.findOne({ email: email });
    if (userCheck) {
      return res
        .status(409)
        .json({ message: "The email address is already registered." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = user.create({
      name: name,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.header("Authorization", token).json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { login, register };
