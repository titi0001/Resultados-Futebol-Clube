import { Request, Response } from 'express';
import { IServiceTeam } from '../interfaces/ITeam';

export default class TeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async readAllUser(_req: Request, res: Response) {
    const result = await this._service.readAll();
    return res.status(200).send(result);
  }

  async readById(req: Request, res: Response) {
    const { id } = req.params;
    const resultById = await this._service.readById(parseInt(id, 10));
    return res.status(200).send(resultById);
  }
}
