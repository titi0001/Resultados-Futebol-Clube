import { Request, Response } from 'express';
import { IServiceLeadBoard } from '../interfaces/ILeaderBoard';

export default class LeaderBoardController {
  private _service : IServiceLeadBoard;

  constructor(service: IServiceLeadBoard) {
    this._service = service;
  }

  async findAllHome(_req: Request, res: Response) {
    const resultAllLeaderBoard = await this._service.readAllHome();
    return res.status(200).send(resultAllLeaderBoard);
  }

  async findAllAway(_req: Request, res: Response) {
    const resultAllLeaderBoard = await this._service.readAllAway();
    return res.status(200).send(resultAllLeaderBoard);
  }

  async findAll(_req: Request, res: Response) {
    await this._service.readAllAway();
    return res.status(404).send({ message: 'em desenvolvimento' });
  }
}
