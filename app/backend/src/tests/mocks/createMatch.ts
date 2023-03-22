const validNewMatch = {
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
};

const newMatchResponse = {
  id: 50,
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true,
};

const validScore = {
  homeTeamId: 4,
  awayTeamId: 9,
  homeTeamGoals: 2,
  awayTeamGoals: 1,
};

const invalidId = {
  homeTeamId: 4,
  awayTeamId: 9999,
  homeTeamGoals: 2,
  awayTeamGoals: 1,
};

const invalidSameId = {
  homeTeamId: 4,
  awayTeamId: 4,
  homeTeamGoals: 2,
  awayTeamGoals: 1,
};

export {
  validNewMatch,
  validScore,
  invalidId,
  invalidSameId,
  newMatchResponse,
};
