import Match from '../../database/models/MatchesModel';
import { TeamSide } from '../interfaces/ILeaderBoard';
import { resultGame, resultGoal } from './functions';

export default class leaderBoardResult {
  static resultTotalPoints(matches: Match[], sideTeam: TeamSide[]): number {
    const { wins, draws } = resultGame(matches, sideTeam);
    return (wins * 3) + draws;
  }

  static resultTotalGames(matches: Match[]): number {
    return matches.length;
  }

  static resultTotalWins(matches: Match[], sideTeam: TeamSide[]):number {
    const { wins } = resultGame(matches, sideTeam);
    return (wins * 3);
  }

  static resultTotalDraws(matches: Match[], sideTeam: TeamSide[]):number {
    const { draws } = resultGame(matches, sideTeam);
    return draws * 1;
  }

  static resultTotalLosses(matches: Match[], sideTeam: TeamSide[]):number {
    const { losses } = resultGame(matches, sideTeam);
    return losses;
  }

  static resultGoalsOutput(matches: Match[], sideTeam: TeamSide[]) {
    const { homeGoals } = resultGoal(matches, sideTeam);
    return homeGoals;
  }

  static resultGoalsInput(matches: Match[], sideTeam: TeamSide[]):number {
    const { awayGoals } = resultGoal(matches, sideTeam);
    return awayGoals;
  }

  static resultTotalGoalBalance(matches: Match[], sideTeam: TeamSide[]):number {
    const { awayGoals, homeGoals } = resultGoal(matches, sideTeam);
    return homeGoals - awayGoals;
  }

  static resultTeamUtilization(matches: Match[], sideTeam: TeamSide[]): number {
    const resultPoint = leaderBoardResult.resultTotalPoints(matches, sideTeam);
    const resultMatches = leaderBoardResult.resultTotalGames(matches);

    const resultUtilization = Number(((resultPoint / resultMatches) * 100).toFixed(2));
    return resultUtilization;
  }
}
