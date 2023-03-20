import Match from '../../database/models/MatchesModel';
import { TeamSide } from '../interfaces/ILeaderBoard';
import resultGame from './functions';

export default class leaderBoardResult {
  static resultTotalPoints(matches: Match[], sideTeam: []): number {
    const { wins, draws } = resultGame(matches, sideTeam);
    return (wins * 3) + draws;
  }

  static resultTotalGames(): number {

  }

  static resultTotalWins(matches: Match[], sideTeam: TeamSide[]):number {
    const { wins } = resultGame(matches, sideTeam);
    return (wins * 3);
  }

  static resultTotalDraws(matches: Match[], sideTeam: TeamSide[]):number {
    const { draws } = resultGame(matches, sideTeam);
    return draws;
  }

  static resultTotalLosses(matches: Match[], sideTeam: TeamSide[]):number {
    const { losses } = resultGame(matches, sideTeam);
    return losses;
  }

  //   resultGoalsScoredFor(): void

  //   resultGoalsConceded(): void

  //   resultTotalGoalBalance():void

//   resultTeamUtilization(): void
}
