export interface Match {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
  time: string;
  isLive: boolean;
  featured?: boolean;
  score?: {
    home: number;
    away: number;
  };
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  additionalMarkets?: string[];
}

export const mockMatches: Match[] = [
  // Soccer
  {
    id: 'soccer-1',
    sport: 'Soccer',
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool',
    homeTeamLogo: '⚽',
    awayTeamLogo: '⚽',
    time: '15:00',
    isLive: true,
    featured: true,
    score: { home: 2, away: 1 },
    odds: { home: 2.5, draw: 3.2, away: 2.8 },
    additionalMarkets: ['Over/Under', 'Both Teams to Score', 'Correct Score'],
  },
  {
    id: 'soccer-2',
    sport: 'Soccer',
    homeTeam: 'Manchester City',
    awayTeam: 'Chelsea',
    homeTeamLogo: '⚽',
    awayTeamLogo: '⚽',
    time: '17:30',
    isLive: false,
    featured: true,
    odds: { home: 1.8, draw: 3.5, away: 4.2 },
    additionalMarkets: ['Over/Under', 'Both Teams to Score'],
  },
  {
    id: 'soccer-3',
    sport: 'Soccer',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeTeamLogo: '⚽',
    awayTeamLogo: '⚽',
    time: '20:00',
    isLive: false,
    featured: true,
    odds: { home: 2.2, draw: 3.1, away: 3.0 },
    additionalMarkets: ['Over/Under', 'Both Teams to Score', 'First Goal'],
  },
  {
    id: 'soccer-4',
    sport: 'Soccer',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    homeTeamLogo: '⚽',
    awayTeamLogo: '⚽',
    time: '18:45',
    isLive: true,
    score: { home: 1, away: 1 },
    odds: { home: 1.9, draw: 3.3, away: 3.8 },
    additionalMarkets: ['Over/Under', 'Correct Score'],
  },
  {
    id: 'soccer-5',
    sport: 'Soccer',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    homeTeamLogo: '⚽',
    awayTeamLogo: '⚽',
    time: '21:00',
    isLive: false,
    odds: { home: 1.6, draw: 3.8, away: 5.5 },
    additionalMarkets: ['Over/Under'],
  },

  // Basketball
  {
    id: 'basketball-1',
    sport: 'Basketball',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    homeTeamLogo: '🏀',
    awayTeamLogo: '🏀',
    time: '19:30',
    isLive: true,
    featured: true,
    score: { home: 95, away: 88 },
    odds: { home: 1.85, draw: 15.0, away: 2.1 },
    additionalMarkets: ['Total Points', 'Point Spread', 'Quarter Winner'],
  },
  {
    id: 'basketball-2',
    sport: 'Basketball',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeTeamLogo: '🏀',
    awayTeamLogo: '🏀',
    time: '20:00',
    isLive: false,
    odds: { home: 2.0, draw: 18.0, away: 1.9 },
    additionalMarkets: ['Total Points', 'Point Spread'],
  },
  {
    id: 'basketball-3',
    sport: 'Basketball',
    homeTeam: 'Nets',
    awayTeam: 'Knicks',
    homeTeamLogo: '🏀',
    awayTeamLogo: '🏀',
    time: '21:30',
    isLive: false,
    odds: { home: 2.3, draw: 19.0, away: 1.7 },
    additionalMarkets: ['Total Points'],
  },

  // Tennis
  {
    id: 'tennis-1',
    sport: 'Tennis',
    homeTeam: 'Djokovic',
    awayTeam: 'Nadal',
    homeTeamLogo: '🎾',
    awayTeamLogo: '🎾',
    time: '14:00',
    isLive: true,
    featured: true,
    score: { home: 2, away: 1 },
    odds: { home: 1.65, draw: 1.0, away: 2.3 },
    additionalMarkets: ['Set Winner', 'Total Games', 'Game Handicap'],
  },
  {
    id: 'tennis-2',
    sport: 'Tennis',
    homeTeam: 'Alcaraz',
    awayTeam: 'Medvedev',
    homeTeamLogo: '🎾',
    awayTeamLogo: '🎾',
    time: '16:30',
    isLive: false,
    odds: { home: 1.9, draw: 1.0, away: 2.0 },
    additionalMarkets: ['Set Winner', 'Total Games'],
  },

  // Baseball
  {
    id: 'baseball-1',
    sport: 'Baseball',
    homeTeam: 'Yankees',
    awayTeam: 'Red Sox',
    homeTeamLogo: '⚾',
    awayTeamLogo: '⚾',
    time: '19:00',
    isLive: false,
    featured: true,
    odds: { home: 1.75, draw: 12.0, away: 2.2 },
    additionalMarkets: ['Total Runs', 'Run Line', 'First Inning Winner'],
  },
  {
    id: 'baseball-2',
    sport: 'Baseball',
    homeTeam: 'Dodgers',
    awayTeam: 'Giants',
    homeTeamLogo: '⚾',
    awayTeamLogo: '⚾',
    time: '22:00',
    isLive: false,
    odds: { home: 1.95, draw: 13.0, away: 1.95 },
    additionalMarkets: ['Total Runs', 'Run Line'],
  },

  // Hockey
  {
    id: 'hockey-1',
    sport: 'Hockey',
    homeTeam: 'Maple Leafs',
    awayTeam: 'Canadiens',
    homeTeamLogo: '🏒',
    awayTeamLogo: '🏒',
    time: '19:00',
    isLive: true,
    score: { home: 2, away: 2 },
    odds: { home: 2.1, draw: 3.6, away: 3.2 },
    additionalMarkets: ['Total Goals', 'Puck Line', 'Period Winner'],
  },
  {
    id: 'hockey-2',
    sport: 'Hockey',
    homeTeam: 'Bruins',
    awayTeam: 'Rangers',
    homeTeamLogo: '🏒',
    awayTeamLogo: '🏒',
    time: '20:00',
    isLive: false,
    odds: { home: 1.85, draw: 3.8, away: 3.9 },
    additionalMarkets: ['Total Goals', 'Puck Line'],
  },
];
