import { NextFunction, Request, Response } from 'express';
import ErrorRequest from '../errors/errorRequest';

export default class ErrorHandler {
  public static handle(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,

  ) {
    const { status, message } = err as ErrorRequest;
    res.status(status).send({ message });
  }
}
