import { Response } from 'express';
import { IServiceMatch } from '../interfaces/IMatch';

export default class MatchController {
  private _service: IServiceMatch;

  constructor(service: IServiceMatch) {
    this._service = service;
  }

  async findAllMatch(_req: Request, res: Response) {
    const resultAllMatch = await this._service.readAll();
    return res.status(200).send(resultAllMatch);
  }
}
