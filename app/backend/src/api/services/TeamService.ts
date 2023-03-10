import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import ErrorRequest from '../errors/errorRequest';
import ITeam, { IServiceTeam } from '../interfaces/ITeam';

const ID_NOT_FOUND = 'ID não existe';

export default class TeamService implements IServiceTeam {
  protected model: ModelStatic<Team> = Team;

  async create(dto: ITeam): Promise<Team> {
    return this.model.create({ ...dto });
  }

  async readAll(): Promise<Team[]> {
    return this.model.findAll();
  }

  async readById(id: number): Promise<Team> {
    const teamFind = await this.model.findOne({ where: { id } });
    if (!teamFind) throw new ErrorRequest(ID_NOT_FOUND);
    return teamFind;
  }

  async update(id: number, dto: ITeam): Promise<[number, Team[]]> {
    const teamReadId = await this.model.findByPk(id);
    if (!teamReadId) throw new ErrorRequest(ID_NOT_FOUND);

    const teamUpdate = this.model.update({ dto }, {
      returning: true,
      where: { id: teamReadId },
    });

    return teamUpdate;
  }

  async delete(id: string): Promise<void> {
    const teamDelete = await this.model.destroy({ where: { id } });
    if (!teamDelete) throw new ErrorRequest(ID_NOT_FOUND);
  }
}
