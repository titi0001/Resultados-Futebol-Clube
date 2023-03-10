import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './TeamModel';

class Match extends Model {
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals:number;
  declare inProgress: boolean;
}

Match.init({
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

Match.belongsTo(Team, { foreignKey: 'home_team_id', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'home_team_id', as: 'homeTeam' });
Match.belongsTo(Team, { foreignKey: 'away_team_id', as: 'awayTeam' });
Team.hasMany(Match, { foreignKey: 'away_team_id', as: 'awayTeam' });

export default Match;
