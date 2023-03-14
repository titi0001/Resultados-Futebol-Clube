import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

const validateFieldsLogin = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async function loginValidate(req: Request, res: Response, next: NextFunction) {
  const { error } = await validateFieldsLogin.validate(req.body);

  if (error?.details[0].type === 'any.required' || error?.details[0].type === 'string.min') {
    return res.status(400).send({ message: 'All fields must be filled' });
  }

  if (error?.details[0].type === 'string.email') {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  next();
}
