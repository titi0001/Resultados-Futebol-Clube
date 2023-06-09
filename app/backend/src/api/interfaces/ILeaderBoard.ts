export default interface ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance?: number;
  efficiency?: number;

}

export type TeamSide = 'homeTeamGoals' | 'awayTeamGoals';

export interface IServiceLeadBoard {

  readAllHome():Promise<ILeaderBoard[]>

  readAllAway():Promise<ILeaderBoard[]>

  // readAll():Promise<ILeaderBoard[]>
}
