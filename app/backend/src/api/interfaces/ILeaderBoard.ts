export default interface ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency?: string;

}

export type TeamSide = 'homeTeamGoals' | 'awayTeamGoals';

// export interface ILeaderBoardService {

//   resultTotalPoints(matches: [], sideTeam: []): number

//   resultTotalWins(matches: [], sideTeam: []): number

//   resultTotalDraws(matches: [], sideTeam: []): number

//   resultTotalLosses(matches: [], sideTeam: []): number

//   // resultTotalGames(): void

//   // resultGoalsScoredFor(): void

//   // resultGoalsConceded(): void

//   // resultTotalGoalBalance():void

//   // resultTeamUtilization(): void
// }
