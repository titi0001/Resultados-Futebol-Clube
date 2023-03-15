import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchesModel';
import Team from '../../database/models/TeamModel';
import ErrorRequest from '../errors/errorRequest';
import IMatch, { IServiceMatch } from '../interfaces/IMatch';

const ID_NOT_FOUND = 'There is no team with such id!';
const EQUAL_MATCHES_NOT_POSSIBLE = 'It is not possible to create a match with two equal teams';

export default class MatchService implements IServiceMatch {
  protected model: ModelStatic<Match> = Match;

  async create(dto: IMatch): Promise<Match> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = dto;
    await this.readById(homeTeamId);

    if (homeTeamId === awayTeamId) throw new ErrorRequest(422, EQUAL_MATCHES_NOT_POSSIBLE);

    const resultCreate = await this.model.create(
      { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true },
    );

    return resultCreate;
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

    return this.model.update({ ...dto }, {
      returning: true,
      where: { id },
    });
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
