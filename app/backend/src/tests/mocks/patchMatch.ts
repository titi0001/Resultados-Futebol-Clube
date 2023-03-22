const allMatchesMock = [
    {
      id: 41, // Não alterar esse ID, é usado para verificar o requisito 17
      home_team_id: 'São Paulo',
      home_team_goals: '2',
      away_team_id: 'Internacional',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 42,
      home_team_id: 'Ferroviária',
      home_team_goals: '1',
      away_team_id: 'Avaí/Kindermann',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 43,
      home_team_id: 'Napoli-SC',
      home_team_goals: '0',
      away_team_id: 'Minas Brasília',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 44,
      home_team_id: 'Flamengo',
      home_team_goals: '2',
      away_team_id: 'São José-SP',
      away_team_goals: '2',
      in_progress: 1,
    },
    {
      id: 45,
      home_team_id: 'Cruzeiro',
      home_team_goals: '1',
      away_team_id: 'Botafogo',
      away_team_goals: '1',
      in_progress: 1,
    },
    {
      id: 46,
      home_team_id: 'Corinthians',
      home_team_goals: '1',
      away_team_id: 'Palmeiras',
      away_team_goals: '1',
      in_progress: 1,
    },
    {
      id: 47,
      home_team_id: 'Grêmio',
      home_team_goals: '1',
      away_team_id: 'Santos',
      away_team_goals: '2',
      in_progress: 1,
    },
    {
      id: 48,
      home_team_id: 'Real Brasília',
      home_team_goals: '1',
      away_team_id: 'Bahia',
      away_team_goals: '1',
      in_progress: 1,
    },
    {
      id: 1,
      home_team_id: 'São Paulo',
      home_team_goals: '1',
      away_team_id: 'Grêmio',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 2,
      home_team_id: 'Internacional',
      home_team_goals: '1',
      away_team_id: 'Santos',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 3,
      home_team_id: 'Corinthians',
      home_team_goals: '3',
      away_team_id: 'Napoli-SC',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 4,
      home_team_id: 'Botafogo',
      home_team_goals: '0',
      away_team_id: 'Bahia',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 5,
      home_team_id: 'Flamengo',
      home_team_goals: '1',
      away_team_id: 'Minas Brasília',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 6,
      home_team_id: 'Cruzeiro',
      home_team_goals: '1',
      away_team_id: 'Real Brasília',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 7,
      home_team_id: 'Palmeiras',
      home_team_goals: '2',
      away_team_id: 'Ferroviária',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 8,
      home_team_id: 'São José-SP',
      home_team_goals: '0',
      away_team_id: 'Avaí/Kindermann',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 9,
      home_team_id: 'Avaí/Kindermann',
      home_team_goals: '0',
      away_team_id: 'Palmeiras',
      away_team_goals: '3',
      in_progress: 0,
    },
    {
      id: 10,
      home_team_id: 'Bahia',
      home_team_goals: '0',
      away_team_id: 'Internacional',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 11,
      home_team_id: 'Real Brasília',
      home_team_goals: '1',
      away_team_id: 'Botafogo',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 12,
      home_team_id: 'Ferroviária',
      home_team_goals: '0',
      away_team_id: 'Corinthians',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 13,
      home_team_id: 'Grêmio',
      home_team_goals: '2',
      away_team_id: 'Cruzeiro',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 14,
      home_team_id: 'Santos',
      home_team_goals: '2',
      away_team_id: 'São Paulo',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 15,
      home_team_id: 'Minas Brasília',
      home_team_goals: '0',
      away_team_id: 'São José-SP',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 16,
      home_team_id: 'Napoli-SC',
      home_team_goals: '0',
      away_team_id: 'Flamengo',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 17,
      home_team_id: 'Avaí/Kindermann',
      home_team_goals: '2',
      away_team_id: 'Grêmio',
      away_team_goals: '3',
      in_progress: 0,
    },
    {
      id: 18,
      home_team_id: 'Palmeiras',
      home_team_goals: '4',
      away_team_id: 'Cruzeiro',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 19,
      home_team_id: 'Napoli-SC',
      home_team_goals: '2',
      away_team_id: 'Bahia',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 20,
      home_team_id: 'Flamengo',
      home_team_goals: '0',
      away_team_id: 'Internacional',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 21,
      home_team_id: 'Ferroviária',
      home_team_goals: '3',
      away_team_id: 'Real Brasília',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 22,
      home_team_id: 'Corinthians',
      home_team_goals: '3',
      away_team_id: 'Botafogo',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 23,
      home_team_id: 'São José-SP',
      home_team_goals: '2',
      away_team_id: 'São Paulo',
      away_team_goals: '3',
      in_progress: 0,
    },
    {
      id: 24,
      home_team_id: 'Minas Brasília',
      home_team_goals: '2',
      away_team_id: 'Santos',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 25,
      home_team_id: 'Bahia',
      home_team_goals: '0',
      away_team_id: 'Ferroviária',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 26,
      home_team_id: 'Real Brasília',
      home_team_goals: '1',
      away_team_id: 'Avaí/Kindermann',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 27,
      home_team_id: 'Cruzeiro',
      home_team_goals: '1',
      away_team_id: 'São José-SP',
      away_team_goals: '2',
      in_progress: 0,
    },
    {
      id: 28,
      home_team_id: 'São Paulo',
      home_team_goals: '3',
      away_team_id: 'Flamengo',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 29,
      home_team_id: 'Internacional',
      home_team_goals: '0',
      away_team_id: 'Corinthians',
      away_team_goals: '4',
      in_progress: 0,
    },
    {
      id: 30,
      home_team_id: 'Botafogo',
      home_team_goals: '0',
      away_team_id: 'Palmeiras',
      away_team_goals: '4',
      in_progress: 0,
    },
    {
      id: 31,
      home_team_id: 'Grêmio',
      home_team_goals: '2',
      away_team_id: 'Minas Brasília',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 32,
      home_team_id: 'Santos',
      home_team_goals: '5',
      away_team_id: 'Napoli-SC',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 33,
      home_team_id: 'Avaí/Kindermann',
      home_team_goals: '1',
      away_team_id: 'São Paulo',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 34,
      home_team_id: 'Internacional',
      home_team_goals: '3',
      away_team_id: 'Ferroviária',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 35,
      home_team_id: 'Minas Brasília',
      home_team_goals: '1',
      away_team_id: 'Cruzeiro',
      away_team_goals: '3',
      in_progress: 0,
    },
    {
      id: 36,
      home_team_id: 'Bahia',
      home_team_goals: '0',
      away_team_id: 'Flamengo',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 37,
      home_team_id: 'São José-SP',
      home_team_goals: '0',
      away_team_id: 'Real Brasília',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 38,
      home_team_id: 'Santos',
      home_team_goals: '2',
      away_team_id: 'Corinthians',
      away_team_goals: '1',
      in_progress: 0,
    },
    {
      id: 39,
      home_team_id: 'Botafogo',
      home_team_goals: '2',
      away_team_id: 'Napoli-SC',
      away_team_goals: '0',
      in_progress: 0,
    },
    {
      id: 40,
      home_team_id: 'Palmeiras',
      home_team_goals: '4',
      away_team_id: 'Grêmio',
      away_team_goals: '1',
      in_progress: 0,
    },
  ];

  const allMatchesFinishedMock = [
    {
        'id': 1,
        'homeTeamId': 16,
        'homeTeamGoals': 1,
        'awayTeamId': 8,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 16,
        'away_team_id': 8,
        'homeTeam': {
            'teamName': 'São Paulo'
        },
        'awayTeam': {
            'teamName': 'Grêmio'
        }
    },
    {
        'id': 2,
        'homeTeamId': 9,
        'homeTeamGoals': 1,
        'awayTeamId': 14,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 9,
        'away_team_id': 14,
        'homeTeam': {
            'teamName': 'Internacional'
        },
        'awayTeam': {
            'teamName': 'Santos'
        }
    },
    {
        'id': 3,
        'homeTeamId': 4,
        'homeTeamGoals': 3,
        'awayTeamId': 11,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 4,
        'away_team_id': 11,
        'homeTeam': {
            'teamName': 'Corinthians'
        },
        'awayTeam': {
            'teamName': 'Napoli-SC'
        }
    },
    {
        'id': 4,
        'homeTeamId': 3,
        'homeTeamGoals': 0,
        'awayTeamId': 2,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 3,
        'away_team_id': 2,
        'homeTeam': {
            'teamName': 'Botafogo'
        },
        'awayTeam': {
            'teamName': 'Bahia'
        }
    },
    {
        'id': 5,
        'homeTeamId': 7,
        'homeTeamGoals': 1,
        'awayTeamId': 10,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 7,
        'away_team_id': 10,
        'homeTeam': {
            'teamName': 'Flamengo'
        },
        'awayTeam': {
            'teamName': 'Minas Brasília'
        }
    },
    {
        'id': 6,
        'homeTeamId': 5,
        'homeTeamGoals': 1,
        'awayTeamId': 13,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 5,
        'away_team_id': 13,
        'homeTeam': {
            'teamName': 'Cruzeiro'
        },
        'awayTeam': {
            'teamName': 'Real Brasília'
        }
    },
    {
        'id': 7,
        'homeTeamId': 12,
        'homeTeamGoals': 2,
        'awayTeamId': 6,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 12,
        'away_team_id': 6,
        'homeTeam': {
            'teamName': 'Palmeiras'
        },
        'awayTeam': {
            'teamName': 'Ferroviária'
        }
    },
    {
        'id': 8,
        'homeTeamId': 15,
        'homeTeamGoals': 0,
        'awayTeamId': 1,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 15,
        'away_team_id': 1,
        'homeTeam': {
            'teamName': 'São José-SP'
        },
        'awayTeam': {
            'teamName': 'Avaí/Kindermann'
        }
    },
    {
        'id': 9,
        'homeTeamId': 1,
        'homeTeamGoals': 0,
        'awayTeamId': 12,
        'awayTeamGoals': 3,
        'inProgress': false,
        'home_team_id': 1,
        'away_team_id': 12,
        'homeTeam': {
            'teamName': 'Avaí/Kindermann'
        },
        'awayTeam': {
            'teamName': 'Palmeiras'
        }
    },
    {
        'id': 10,
        'homeTeamId': 2,
        'homeTeamGoals': 0,
        'awayTeamId': 9,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 2,
        'away_team_id': 9,
        'homeTeam': {
            'teamName': 'Bahia'
        },
        'awayTeam': {
            'teamName': 'Internacional'
        }
    },
    {
        'id': 11,
        'homeTeamId': 13,
        'homeTeamGoals': 1,
        'awayTeamId': 3,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 13,
        'away_team_id': 3,
        'homeTeam': {
            'teamName': 'Real Brasília'
        },
        'awayTeam': {
            'teamName': 'Botafogo'
        }
    },
    {
        'id': 12,
        'homeTeamId': 6,
        'homeTeamGoals': 0,
        'awayTeamId': 4,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 6,
        'away_team_id': 4,
        'homeTeam': {
            'teamName': 'Ferroviária'
        },
        'awayTeam': {
            'teamName': 'Corinthians'
        }
    },
    {
        'id': 13,
        'homeTeamId': 8,
        'homeTeamGoals': 2,
        'awayTeamId': 5,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 8,
        'away_team_id': 5,
        'homeTeam': {
            'teamName': 'Grêmio'
        },
        'awayTeam': {
            'teamName': 'Cruzeiro'
        }
    },
    {
        'id': 14,
        'homeTeamId': 14,
        'homeTeamGoals': 2,
        'awayTeamId': 16,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 14,
        'away_team_id': 16,
        'homeTeam': {
            'teamName': 'Santos'
        },
        'awayTeam': {
            'teamName': 'São Paulo'
        }
    },
    {
        'id': 15,
        'homeTeamId': 10,
        'homeTeamGoals': 0,
        'awayTeamId': 15,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 10,
        'away_team_id': 15,
        'homeTeam': {
            'teamName': 'Minas Brasília'
        },
        'awayTeam': {
            'teamName': 'São José-SP'
        }
    },
    {
        'id': 16,
        'homeTeamId': 11,
        'homeTeamGoals': 0,
        'awayTeamId': 7,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 11,
        'away_team_id': 7,
        'homeTeam': {
            'teamName': 'Napoli-SC'
        },
        'awayTeam': {
            'teamName': 'Flamengo'
        }
    },
    {
        'id': 17,
        'homeTeamId': 1,
        'homeTeamGoals': 2,
        'awayTeamId': 8,
        'awayTeamGoals': 3,
        'inProgress': false,
        'home_team_id': 1,
        'away_team_id': 8,
        'homeTeam': {
            'teamName': 'Avaí/Kindermann'
        },
        'awayTeam': {
            'teamName': 'Grêmio'
        }
    },
    {
        'id': 18,
        'homeTeamId': 12,
        'homeTeamGoals': 4,
        'awayTeamId': 5,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 12,
        'away_team_id': 5,
        'homeTeam': {
            'teamName': 'Palmeiras'
        },
        'awayTeam': {
            'teamName': 'Cruzeiro'
        }
    },
    {
        'id': 19,
        'homeTeamId': 11,
        'homeTeamGoals': 2,
        'awayTeamId': 2,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 11,
        'away_team_id': 2,
        'homeTeam': {
            'teamName': 'Napoli-SC'
        },
        'awayTeam': {
            'teamName': 'Bahia'
        }
    },
    {
        'id': 20,
        'homeTeamId': 7,
        'homeTeamGoals': 0,
        'awayTeamId': 9,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 7,
        'away_team_id': 9,
        'homeTeam': {
            'teamName': 'Flamengo'
        },
        'awayTeam': {
            'teamName': 'Internacional'
        }
    },
    {
        'id': 21,
        'homeTeamId': 6,
        'homeTeamGoals': 3,
        'awayTeamId': 13,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 6,
        'away_team_id': 13,
        'homeTeam': {
            'teamName': 'Ferroviária'
        },
        'awayTeam': {
            'teamName': 'Real Brasília'
        }
    },
    {
        'id': 22,
        'homeTeamId': 4,
        'homeTeamGoals': 3,
        'awayTeamId': 3,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 4,
        'away_team_id': 3,
        'homeTeam': {
            'teamName': 'Corinthians'
        },
        'awayTeam': {
            'teamName': 'Botafogo'
        }
    },
    {
        'id': 23,
        'homeTeamId': 15,
        'homeTeamGoals': 2,
        'awayTeamId': 16,
        'awayTeamGoals': 3,
        'inProgress': false,
        'home_team_id': 15,
        'away_team_id': 16,
        'homeTeam': {
            'teamName': 'São José-SP'
        },
        'awayTeam': {
            'teamName': 'São Paulo'
        }
    },
    {
        'id': 24,
        'homeTeamId': 10,
        'homeTeamGoals': 2,
        'awayTeamId': 14,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 10,
        'away_team_id': 14,
        'homeTeam': {
            'teamName': 'Minas Brasília'
        },
        'awayTeam': {
            'teamName': 'Santos'
        }
    },
    {
        'id': 25,
        'homeTeamId': 2,
        'homeTeamGoals': 0,
        'awayTeamId': 6,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 2,
        'away_team_id': 6,
        'homeTeam': {
            'teamName': 'Bahia'
        },
        'awayTeam': {
            'teamName': 'Ferroviária'
        }
    },
    {
        'id': 26,
        'homeTeamId': 13,
        'homeTeamGoals': 1,
        'awayTeamId': 1,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 13,
        'away_team_id': 1,
        'homeTeam': {
            'teamName': 'Real Brasília'
        },
        'awayTeam': {
            'teamName': 'Avaí/Kindermann'
        }
    },
    {
        'id': 27,
        'homeTeamId': 5,
        'homeTeamGoals': 1,
        'awayTeamId': 15,
        'awayTeamGoals': 2,
        'inProgress': false,
        'home_team_id': 5,
        'away_team_id': 15,
        'homeTeam': {
            'teamName': 'Cruzeiro'
        },
        'awayTeam': {
            'teamName': 'São José-SP'
        }
    },
    {
        'id': 28,
        'homeTeamId': 16,
        'homeTeamGoals': 3,
        'awayTeamId': 7,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 16,
        'away_team_id': 7,
        'homeTeam': {
            'teamName': 'São Paulo'
        },
        'awayTeam': {
            'teamName': 'Flamengo'
        }
    },
    {
        'id': 29,
        'homeTeamId': 9,
        'homeTeamGoals': 0,
        'awayTeamId': 4,
        'awayTeamGoals': 4,
        'inProgress': false,
        'home_team_id': 9,
        'away_team_id': 4,
        'homeTeam': {
            'teamName': 'Internacional'
        },
        'awayTeam': {
            'teamName': 'Corinthians'
        }
    },
    {
        'id': 30,
        'homeTeamId': 3,
        'homeTeamGoals': 0,
        'awayTeamId': 12,
        'awayTeamGoals': 4,
        'inProgress': false,
        'home_team_id': 3,
        'away_team_id': 12,
        'homeTeam': {
            'teamName': 'Botafogo'
        },
        'awayTeam': {
            'teamName': 'Palmeiras'
        }
    },
    {
        'id': 31,
        'homeTeamId': 8,
        'homeTeamGoals': 2,
        'awayTeamId': 10,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 8,
        'away_team_id': 10,
        'homeTeam': {
            'teamName': 'Grêmio'
        },
        'awayTeam': {
            'teamName': 'Minas Brasília'
        }
    },
    {
        'id': 32,
        'homeTeamId': 14,
        'homeTeamGoals': 5,
        'awayTeamId': 11,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 14,
        'away_team_id': 11,
        'homeTeam': {
            'teamName': 'Santos'
        },
        'awayTeam': {
            'teamName': 'Napoli-SC'
        }
    },
    {
        'id': 33,
        'homeTeamId': 1,
        'homeTeamGoals': 1,
        'awayTeamId': 16,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 1,
        'away_team_id': 16,
        'homeTeam': {
            'teamName': 'Avaí/Kindermann'
        },
        'awayTeam': {
            'teamName': 'São Paulo'
        }
    },
    {
        'id': 34,
        'homeTeamId': 9,
        'homeTeamGoals': 3,
        'awayTeamId': 6,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 9,
        'away_team_id': 6,
        'homeTeam': {
            'teamName': 'Internacional'
        },
        'awayTeam': {
            'teamName': 'Ferroviária'
        }
    },
    {
        'id': 35,
        'homeTeamId': 10,
        'homeTeamGoals': 1,
        'awayTeamId': 5,
        'awayTeamGoals': 3,
        'inProgress': false,
        'home_team_id': 10,
        'away_team_id': 5,
        'homeTeam': {
            'teamName': 'Minas Brasília'
        },
        'awayTeam': {
            'teamName': 'Cruzeiro'
        }
    },
    {
        'id': 36,
        'homeTeamId': 2,
        'homeTeamGoals': 0,
        'awayTeamId': 7,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 2,
        'away_team_id': 7,
        'homeTeam': {
            'teamName': 'Bahia'
        },
        'awayTeam': {
            'teamName': 'Flamengo'
        }
    },
    {
        'id': 37,
        'homeTeamId': 15,
        'homeTeamGoals': 0,
        'awayTeamId': 13,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 15,
        'away_team_id': 13,
        'homeTeam': {
            'teamName': 'São José-SP'
        },
        'awayTeam': {
            'teamName': 'Real Brasília'
        }
    },
    {
        'id': 38,
        'homeTeamId': 14,
        'homeTeamGoals': 2,
        'awayTeamId': 4,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 14,
        'away_team_id': 4,
        'homeTeam': {
            'teamName': 'Santos'
        },
        'awayTeam': {
            'teamName': 'Corinthians'
        }
    },
    {
        'id': 39,
        'homeTeamId': 3,
        'homeTeamGoals': 2,
        'awayTeamId': 11,
        'awayTeamGoals': 0,
        'inProgress': false,
        'home_team_id': 3,
        'away_team_id': 11,
        'homeTeam': {
            'teamName': 'Botafogo'
        },
        'awayTeam': {
            'teamName': 'Napoli-SC'
        }
    },
    {
        'id': 40,
        'homeTeamId': 12,
        'homeTeamGoals': 4,
        'awayTeamId': 8,
        'awayTeamGoals': 1,
        'inProgress': false,
        'home_team_id': 12,
        'away_team_id': 8,
        'homeTeam': {
            'teamName': 'Palmeiras'
        },
        'awayTeam': {
            'teamName': 'Grêmio'
        }
    }
  ];
  
  const allMatchesProgressMock = [
    {
      id: 41,
      home_team_id: 'São Paulo',
      home_team_goals: '2',
      away_team_id: 'Internacional',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 42,
      home_team_id: 'Ferroviária',
      home_team_goals: '1',
      away_team_id: 'Avaí/Kindermann',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 43,
      home_team_id: 'Napoli-SC',
      home_team_goals: '0',
      away_team_id: 'Minas Brasília',
      away_team_goals: '0',
      in_progress: 1,
    },
    {
      id: 44,
      home_team_id: 'Flamengo',
      home_team_goals: '2',
      away_team_id: 'São José-SP',
      away_team_goals: '2',
      in_progress: 1,
    },
    {
      id: 45,
      home_team_id: 'Cruzeiro',
      home_team_goals: '1',
      away_team_id: 'Botafogo',
      away_team_goals: '1',
      in_progress: 1,
    },
    {
      id: 46,
      home_team_id: 'Corinthians',
      home_team_goals: '1',
      away_team_id: 'Palmeiras',
      away_team_goals: '1',
      in_progress: 1,
    },
    {
      id: 47,
      home_team_id: 'Grêmio',
      home_team_goals: '1',
      away_team_id: 'Santos',
      away_team_goals: '2',
      in_progress: 1,
    },
    {
      id: 48,
      home_team_id: 'Real Brasília',
      home_team_goals: '1',
      away_team_id: 'Bahia',
      away_team_goals: '1',
      in_progress: 1,
    },
  ];

 export { allMatchesMock, allMatchesFinishedMock, allMatchesProgressMock };
  