import Joi from 'joi'

const userSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'br'] } }).required(),
    password: Joi.string().trim().required(),
    confirmPassword: Joi.string().trim().required().valid(Joi.ref('password'))
});
  
export default userSchema