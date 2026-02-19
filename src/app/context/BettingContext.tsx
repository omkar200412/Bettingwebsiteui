import { createContext, useContext, useState, ReactNode } from 'react';

export interface Bet {
  id: string;
  matchId: string;
  matchName: string;
  betType: string;
  selection: string;
  odds: number;
  stake: number;
  sport: string;
}

export interface PlacedBet extends Bet {
  placedAt: Date;
  status: 'pending' | 'won' | 'lost';
  potentialWin: number;
}

interface BettingContextType {
  balance: number;
  bets: Bet[];
  placedBets: PlacedBet[];
  addBet: (bet: Bet) => void;
  removeBet: (id: string) => void;
  clearBets: () => void;
  placeBets: (totalStake: number) => void;
  updateStake: (id: string, stake: number) => void;
}

const BettingContext = createContext<BettingContextType | undefined>(undefined);

export function BettingProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(10000);
  const [bets, setBets] = useState<Bet[]>([]);
  const [placedBets, setPlacedBets] = useState<PlacedBet[]>([
    {
      id: '1',
      matchId: 'match-1',
      matchName: 'Arsenal vs Liverpool',
      betType: 'Match Winner',
      selection: 'Arsenal',
      odds: 2.5,
      stake: 50,
      sport: 'Soccer',
      placedAt: new Date(Date.now() - 3600000),
      status: 'pending',
      potentialWin: 125,
    },
    {
      id: '2',
      matchId: 'match-2',
      matchName: 'Lakers vs Warriors',
      betType: 'Match Winner',
      selection: 'Lakers',
      odds: 1.85,
      stake: 100,
      sport: 'Basketball',
      placedAt: new Date(Date.now() - 7200000),
      status: 'won',
      potentialWin: 185,
    },
  ]);

  const addBet = (bet: Bet) => {
    setBets((prev) => {
      const exists = prev.find((b) => b.id === bet.id);
      if (exists) return prev;
      return [...prev, bet];
    });
  };

  const removeBet = (id: string) => {
    setBets((prev) => prev.filter((b) => b.id !== id));
  };

  const clearBets = () => {
    setBets([]);
  };

  const updateStake = (id: string, stake: number) => {
    setBets((prev) =>
      prev.map((bet) => (bet.id === id ? { ...bet, stake } : bet))
    );
  };

  const placeBets = (totalStake: number) => {
    if (totalStake > balance) return;

    const newPlacedBets: PlacedBet[] = bets.map((bet) => ({
      ...bet,
      placedAt: new Date(),
      status: 'pending' as const,
      potentialWin: bet.stake * bet.odds,
    }));

    setPlacedBets((prev) => [...newPlacedBets, ...prev]);
    setBalance((prev) => prev - totalStake);
    setBets([]);
  };

  return (
    <BettingContext.Provider
      value={{
        balance,
        bets,
        placedBets,
        addBet,
        removeBet,
        clearBets,
        placeBets,
        updateStake,
      }}
    >
      {children}
    </BettingContext.Provider>
  );
}

export function useBetting() {
  const context = useContext(BettingContext);
  if (context === undefined) {
    throw new Error('useBetting must be used within a BettingProvider');
  }
  return context;
}
