import Match from '../../database/models/MatchesModel';

export default interface IMatch {
  id?: number
  homeTeamId: number
  homeTeamGoals: number
  awayTeamId:number
  awayTeamGoals: number
  inProgress: boolean
}

export interface IServiceMatch {
  create(dto: IMatch): Promise<Match>;
  readAll(): Promise<Match[]>;
  readAllInProgress(inProgress: string):Promise<Match[]>;
  readById(id: number):Promise<Match>;
  update(id:string, dto: IMatch): Promise<[number, Match[]]>;
  delete(id:string):Promise<void>;
  finishMatch(id: number): Promise<string>
}
