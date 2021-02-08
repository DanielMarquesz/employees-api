const Joi = require("joi");

const employeesSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(128)
    .required()
    .pattern(/^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/),

  age: Joi.number().integer().min(14).max(65).positive().required(),

  OccupationId: Joi.number().integer().required(),
});

module.exports = { employeesSchema };
