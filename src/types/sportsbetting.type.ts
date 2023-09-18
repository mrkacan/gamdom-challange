export interface Match {
  id: number;
  sport: string;
  teams: Teams;
}

export interface Teams {
  home: Team;
  away: Team;
}

export interface Team {
  name: string;
  odds: number;
  bets: number;
}

export interface Bet {
  betId: number;
  odd: number;
  stake: number;
  potentialWin: string;
  date?: number;
}
