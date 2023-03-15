import { Request, Response } from 'express';
import { IServiceMatch } from '../interfaces/IMatch';

export default class MatchController {
  private _service: IServiceMatch;

  constructor(service: IServiceMatch) {
    this._service = service;
  }

  async findAllMatch(req: Request, res: Response) {
    const { inProgress } = req.query;
    const resultAllMatch = await this._service.readAllInProgress(inProgress as string);
    return res.status(200).send(resultAllMatch);
  }

  async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const resultFinishMatch = await this._service.finishMatch(parseInt(id, 10));
    return res.status(200).send({ message: resultFinishMatch });
  }
}
