import { Request, Response } from 'express';
import { IServiceLeadBoard } from '../interfaces/ILeaderBoard';

export default class LeaderBoardController {
  private _service : IServiceLeadBoard;

  constructor(service: IServiceLeadBoard) {
    this._service = service;
  }

  async findAllHome(_req: Request, res: Response) {
    const resultAllLeaderBoard = await this._service.readAll();
    return res.status(200).send(resultAllLeaderBoard);
  }
}
