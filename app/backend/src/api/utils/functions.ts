import Match from '../../database/models/MatchesModel';
import ILeaderBoard, { TeamSide } from '../interfaces/ILeaderBoard';

export function resultGame(matches: Match[], sideTeam: TeamSide[]) {
  return matches.reduce(
    (acc, curr) => ({
      draws: acc.draws + (curr[sideTeam[0]] === curr[sideTeam[1]] ? 1 : 0),
      losses: acc.losses + (curr[sideTeam[0]] < curr[sideTeam[1]] ? 1 : 0),
      wins: acc.wins + (curr[sideTeam[0]] > curr[sideTeam[1]] ? 1 : 0),
    }),
    { wins: 0, losses: 0, draws: 0 },
  );
}

export function resultGoal(matches: Match[], sideTeam: TeamSide[]) {
  return matches.reduce(
    (acc, curr) => ({
      homeGoals: acc.homeGoals + curr[sideTeam[0]],
      awayGoals: acc.awayGoals + curr[sideTeam[1]],
    }),
    { homeGoals: 0, awayGoals: 0 },
  );
}

export function order(team: ILeaderBoard[]) {
  return team.sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;

    if (a.goalsFavor - a.goalsOwn !== b.goalsFavor - b.goalsOwn) {
      return b.goalsFavor - b.goalsOwn - a.goalsFavor + a.goalsOwn;
    }

    return b.goalsFavor - a.goalsFavor;
  });
}
