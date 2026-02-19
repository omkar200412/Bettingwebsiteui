import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Clock, TrendingUp } from 'lucide-react';
import { Match } from '../../data/mockData';
import { useBetting } from '../../context/BettingContext';
import { toast } from 'sonner';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const { addBet } = useBetting();

  const handleAddBet = (
    selection: string,
    odds: number,
    betType: string = 'Match Winner'
  ) => {
    addBet({
      id: `${match.id}-${selection}-${Date.now()}`,
      matchId: match.id,
      matchName: `${match.homeTeam} vs ${match.awayTeam}`,
      betType,
      selection,
      odds,
      stake: 0,
      sport: match.sport,
    });
    toast.success(`Added ${selection} to bet slip`);
  };

  return (
    <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-all">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-slate-800 text-slate-300 border-slate-700">
              {match.sport}
            </Badge>
            {match.isLive && (
              <Badge className="bg-red-500 text-white border-0 animate-pulse">
                LIVE
              </Badge>
            )}
            {match.featured && (
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                <TrendingUp className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          {!match.isLive && (
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <Clock className="h-3 w-3" />
              {match.time}
            </div>
          )}
        </div>

        {/* Teams */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{match.homeTeamLogo}</span>
              <span className="text-white font-semibold">
                {match.homeTeam}
              </span>
            </div>
            {match.isLive && match.score && (
              <span className="text-2xl font-bold text-white">
                {match.score.home}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{match.awayTeamLogo}</span>
              <span className="text-white font-semibold">
                {match.awayTeam}
              </span>
            </div>
            {match.isLive && match.score && (
              <span className="text-2xl font-bold text-white">
                {match.score.away}
              </span>
            )}
          </div>
        </div>

        {/* Betting Odds */}
        <div className="space-y-2">
          <p className="text-slate-400 text-sm">Match Winner</p>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="bg-slate-800 border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-white flex-col h-auto py-2"
              onClick={() =>
                handleAddBet(match.homeTeam, match.odds.home, 'Match Winner')
              }
            >
              <span className="text-xs text-slate-400 mb-1">Home</span>
              <span className="font-bold">{match.odds.home}</span>
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-white flex-col h-auto py-2"
              onClick={() => handleAddBet('Draw', match.odds.draw, 'Match Winner')}
            >
              <span className="text-xs text-slate-400 mb-1">Draw</span>
              <span className="font-bold">{match.odds.draw}</span>
            </Button>
            <Button
              variant="outline"
              className="bg-slate-800 border-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white text-white flex-col h-auto py-2"
              onClick={() =>
                handleAddBet(match.awayTeam, match.odds.away, 'Match Winner')
              }
            >
              <span className="text-xs text-slate-400 mb-1">Away</span>
              <span className="font-bold">{match.odds.away}</span>
            </Button>
          </div>
        </div>

        {/* Additional Markets */}
        {match.additionalMarkets && match.additionalMarkets.length > 0 && (
          <div className="pt-3 border-t border-slate-800">
            <p className="text-slate-400 text-xs mb-2">
              +{match.additionalMarkets.length} more markets
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
