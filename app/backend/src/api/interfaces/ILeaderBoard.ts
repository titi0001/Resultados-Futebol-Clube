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

export interface ILeaderBoardService {

  resultTotalPoints(match: [], sideTeam: []): number

  // resultTotalGames(): void

  // resultTotalWins(): void

  // resultTotalDraws(): void

  // resultTotalLosses(): void

  // resultGoalsScoredFor(): void

  // resultGoalsConceded(): void

  // resultTotalGoalBalance():void

  // resultTeamUtilization(): void
}

export type TeamSide = 'homeTeamGoals' | 'awayTeamGoals';
