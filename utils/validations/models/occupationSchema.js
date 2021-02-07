const Joi = require('joi');


const occupationSchema  = Joi.object({

    name: Joi.string()        
        .min(3)
        .max(128)
        .required()
        .pattern(/^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/),
});

module.exports = {occupationSchema};