import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchesModel';
import Team from '../../database/models/TeamModel';
// import ILeaderBoard from '../interfaces/ILeaderBoard';

export default class leaderBoardService {
  protected modelMatch: ModelStatic<Match> = Match;
  protected modelTeam: ModelStatic<Team> = Team;
}
