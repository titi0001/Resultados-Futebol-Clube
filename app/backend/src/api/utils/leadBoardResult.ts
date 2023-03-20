import Match from '../../database/models/MatchesModel';
import { ILeaderBoardService, TeamSide } from '../interfaces/ILeaderBoard';

export default class leaderBoardResult implements ILeaderBoardService {
  resultGame = (matches: Match[], sideTeam: TeamSide[]) => matches.reduce(
    (acc, curr) => ({
      draws: acc.draws + (curr[sideTeam[0]] === curr[sideTeam[1]] ? 1 : 0),
      losses: acc.losses + (curr[sideTeam[0]] < curr[sideTeam[1]] ? 1 : 0),
      wins: acc.wins + (curr[sideTeam[0]] > curr[sideTeam[1]] ? 1 : 0),
    }),
    { wins: 0, losses: 0, draws: 0 },
  );

  public resultTotalPoints(matches: Match[], sideTeam: TeamSide[]): number {
    const { wins, draws } = this.resultGame(matches, sideTeam);
    return (wins * 3) + draws;
  }

  //   resultTotalGames(): void

  resultTotalWins(matches: Match[], sideTeam: TeamSide[]):number {
    const { wins } = this.resultGame(matches, sideTeam);
    return (wins * 3);
  }

  resultTotalDraws(matches: Match[], sideTeam: TeamSide[]):number {
    const { draws } = this.resultGame(matches, sideTeam);
    return draws;
  }

  resultTotalLosses(matches: Match[], sideTeam: TeamSide[]):number {
    const { losses } = this.resultGame(matches, sideTeam);
    return losses;
  }

  //   resultGoalsScoredFor(): void

  //   resultGoalsConceded(): void

  //   resultTotalGoalBalance():void

//   resultTeamUtilization(): void
}
