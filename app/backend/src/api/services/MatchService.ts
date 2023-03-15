import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchesModel';
import Team from '../../database/models/TeamModel';
import ErrorRequest from '../errors/errorRequest';
import IMatch, { IServiceMatch } from '../interfaces/IMatch';

const ID_NOT_FOUND = 'ID não existe';

export default class MatchService implements IServiceMatch {
  protected model: ModelStatic<Match> = Match;

  async create(dto: IMatch): Promise<Match> {
    return this.model.create({ ...dto });
  }

  async readAll(): Promise<Match[]> {
    return this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ] });
  }

  async readAllInProgress(inProgress: string): Promise<Match[]> {
    if (inProgress === 'true') {
      return (await this.readAll()).filter((match) => match.inProgress);
    }

    if (inProgress === 'false') {
      return (await this.readAll()).filter((match) => !match.inProgress);
    }

    return this.readAll();
  }

  async readById(id: number): Promise<Match> {
    const matchFind = await this.model.findOne({ where: { id } });
    if (!matchFind) throw new ErrorRequest(404, ID_NOT_FOUND);

    return matchFind;
  }

  async update(id: number, dto: IMatch): Promise<[number, Match[]]> {
    const matchReadId = await this.model.findByPk(id);
    if (!matchReadId) throw new ErrorRequest(404, ID_NOT_FOUND);

    const matchUpdate = await this.model.update({ dto }, {
      returning: true,
      where: { id: matchReadId },
    });

    return matchUpdate;
  }

  async delete(id: string): Promise<void> {
    const matchDelete = await this.model.destroy({ where: {
      id,
    } });
    if (!matchDelete) throw new ErrorRequest(404, ID_NOT_FOUND);
  }

  async finishMatch(id: number): Promise<string> {
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return 'Finished';
  }
}
