import Team from '../../database/models/TeamModel';

export default interface ITeam {
  id?: number
  teamName: string
}

export interface IServiceTeam {
  create(dto: ITeam): Promise<Team>;
  readAll(): Promise<Team[]>;
  readById(id: number):Promise<Team>;
  update(id:number, dto: ITeam): Promise<[number, Team[]]>;
  delete(id:string):Promise<void>;
}
