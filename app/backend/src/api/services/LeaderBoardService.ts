import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchesModel';
import Team from '../../database/models/TeamModel';
import ILeaderBoard, { IServiceLeadBoard } from '../interfaces/ILeaderBoard';
import ObjLeadBoard from '../utils/CreateLeadBoard';
import { order } from '../utils/functions';

export default class LeaderBoardService implements IServiceLeadBoard {
  protected modelMatch: ModelStatic<Match> = Match;
  protected modelTeam: ModelStatic<Team> = Team;

  async readAllHome():Promise<ILeaderBoard[]> {
    const team = await this.modelTeam.findAll();
    const matches = await this.modelMatch.findAll({ where: { inProgress: false } });

    const result : ILeaderBoard[] = team.map(({ id, teamName }) => {
      const match = matches.filter(({ homeTeamId }) => homeTeamId === id);
      return ObjLeadBoard(teamName, match, ['homeTeamGoals', 'awayTeamGoals']);
    });
    return order(result);
  }

  async readAllAway():Promise<ILeaderBoard[]> {
    const team = await this.modelTeam.findAll();
    const matches = await this.modelMatch.findAll({ where: { inProgress: false } });

    const result : ILeaderBoard[] = team.map(({ id, teamName }) => {
      const match = matches.filter(({ awayTeamId }) => awayTeamId === id);
      return ObjLeadBoard(teamName, match, ['awayTeamGoals', 'homeTeamGoals']);
    });
    return order(result);
  }
}
