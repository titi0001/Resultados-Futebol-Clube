import Match from '../../database/models/MatchesModel';
import { TeamSide } from '../interfaces/ILeaderBoard';
import leaderBoardResult from './leadBoardResult';

export default function ObjLeadBoard(teamName: string, matches: Match[], sideTeam: TeamSide[]) {
  return {
    name: teamName,
    totalPoints: leaderBoardResult.resultTotalPoints(matches, sideTeam),
    totalGames: leaderBoardResult.resultTotalGames(matches),
    totalVictories: leaderBoardResult.resultTotalWins(matches, sideTeam),
    totalDraws: leaderBoardResult.resultTotalDraws(matches, sideTeam),
    totalLosses: leaderBoardResult.resultTotalLosses(matches, sideTeam),
    goalsFavor: leaderBoardResult.resultGoalsOutput(matches, sideTeam),
    goalsOwn: leaderBoardResult.resultGoalsInput(matches, sideTeam),
    goalsBalance: leaderBoardResult.resultTotalGoalBalance(matches, sideTeam),
    efficiency: leaderBoardResult.resultTeamUtilization(matches, sideTeam),
  };
}
