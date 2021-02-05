const Joi = require('joi');


const employeesSchema  = Joi.object({

    name: Joi.string()        
        .min(3)
        .max(128)
        .required()
        .alphanum(),


    age: Joi.number()
        .integer()
        .min(14)
        .max(65)
        .positive()        
        .required(),  
        
    OcuppationId: Joi.number()
        .integer(),
    
    createdAt: Joi.string()
        .alphanum(),

    createdAt: Joi.string()
        .alphanum()

});

module.exports = {employeesSchema};