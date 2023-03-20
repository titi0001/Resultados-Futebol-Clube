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

export interface IServiceLeadBoard {
  readAll()
}

export interface ILeaderBoardResult {

  resultTotalGames(matches: []): number

  resultTotalPoints(matches: [], sideTeam: []): number

  resultTotalWins(matches: [], sideTeam: []): number

  resultTotalDraws(matches: [], sideTeam: []): number

  resultTotalLosses(matches: [], sideTeam: []): number

  resultGoalsOutput(matches: [], sideTeam: []): number

  resultGoalsInput(matches: [], sideTeam: []): number

  resultTotalGoalBalance(matches: [], sideTeam: []):number

  resultTeamUtilization(matches: [], sideTeam: []): number
}
