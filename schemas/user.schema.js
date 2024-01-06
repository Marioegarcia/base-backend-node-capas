
const Joi = require('joi');


const id = Joi.number().integer();
const name = Joi.string().min(1);
const password = Joi.string();


const createUserSchema = Joi.object({
  name: name.required(),
 
  password: password.required(),
 
});

const updateUserSchema = Joi.object({
  name: name,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema }
