const Joi = require('joi')

module.exports.userSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  rollNo: Joi.number().required(),
  department: Joi.string().required(),
  semester: Joi.number().required(),
  password: Joi.string().required(),
  //image: Joi.string().required(),
  email: Joi.string().email().required(),
});
