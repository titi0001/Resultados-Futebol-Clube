import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './TeamModel';

class Matches extends Model {
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals:number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeamId: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamId: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Team, { foreignKey: 'home_team_id', as: 'homeTeam' });
Team.hasMany(Matches, { foreignKey: 'home_team_id', as: 'homeTeam' });
Matches.belongsTo(Team, { foreignKey: 'away_team_id', as: 'awayTeam' });
Team.hasMany(Matches, { foreignKey: 'away_team_id', as: 'awayTeam' });

export default Matches;
