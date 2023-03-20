import Match from '../../database/models/MatchesModel';
import { TeamSide } from '../interfaces/ILeaderBoard';

function resultGame(matches: Match[], sideTeam: TeamSide[]) {
  return matches.reduce(
    (acc, curr) => ({
      draws: acc.draws + (curr[sideTeam[0]] === curr[sideTeam[1]] ? 1 : 0),
      losses: acc.losses + (curr[sideTeam[0]] < curr[sideTeam[1]] ? 1 : 0),
      wins: acc.wins + (curr[sideTeam[0]] > curr[sideTeam[1]] ? 1 : 0),
    }),
    { wins: 0, losses: 0, draws: 0 },
  );
}

export default resultGame;
