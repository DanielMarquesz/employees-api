const Joi = require('joi');


const ocuppationSchema  = Joi.object({

    name: Joi.string()        
        .min(3)
        .max(128)
        .required()
        .alphanum(),    
    
    createdAt: Joi.string()
        .required(),

    updatedAt: Joi.string()
        .required()

});

module.exports = {ocuppationSchema};