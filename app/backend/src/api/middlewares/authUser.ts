import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import ErrorRequest from '../errors/errorRequest';

export default function authUser(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  if (!token) {
    throw new ErrorRequest(401, 'Token not found');
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = user;
    next();
  } catch (error) {
    throw new ErrorRequest(401, 'Invalid token');
  }
}
