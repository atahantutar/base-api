const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/auth.js");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/authValidation.js");

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);

module.exports = router;
