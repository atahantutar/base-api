const joi = require("joi");

const registerValidation = (req, res, next) => {
  const registerSchema = joi.object({
    name: joi.string().trim().min(3).max(15).required(),
    lastName: joi.string().trim().min(3).max(15).required(),
    email: joi.string().email().trim().min(3).max(100).required(),
    password: joi.string().trim().min(6).max(36).required(),
  });
  const { error } = registerSchema.validate(req.body);

  if (error) {
    res.status(409).send(error.details[0].message);
    return;
  }
  next();
};
const loginValidation = (req, res, next) => {
  const loginSchema = joi.object({
    email: joi.string().email().trim().min(3).max(100).required(),
    password: joi.string().trim().min(6).max(36).required(),
  });
  const { error } = loginSchema.validate(req.body);

  if (error) {
    res.status(409).send(error.details[0].message);
    return;
  }
  next();
};

module.exports = { registerValidation, loginValidation };
