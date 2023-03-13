import { Request, Response } from 'express';
import { IServiceUser } from '../interfaces/IUser';

export default class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async findUserLogin(req: Request, res: Response) {
    const resultToken = await this._service.findLogin(req.body);
    return res.status(200).send({ token: resultToken });
  }
}
