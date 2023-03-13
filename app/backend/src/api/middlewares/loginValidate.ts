import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateFieldsLogin = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export default function loginValidate(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'All fields must be filled' });
  }

  next();
}
