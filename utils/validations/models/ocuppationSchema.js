const Joi = require('joi');


const ocuppationSchema  = Joi.object({

    name: Joi.string()        
        .min(3)
        .max(128)
        .required()
        .alphanum(),  
    
    

});

module.exports = {ocuppationSchema};