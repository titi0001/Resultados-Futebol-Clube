import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import ErrorRequest from '../errors/errorRequest';

export default function authUser(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new ErrorRequest(401, 'Token not found');
  }
  try {
    const user = jwt.verify(authorization, process.env.JWT_SECRET as string);
    req.body.authUser = user;
    next();
  } catch (error) {
    throw new ErrorRequest(401, 'Token must be a valid token');
  }
}
