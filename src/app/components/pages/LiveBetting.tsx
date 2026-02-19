import { Badge } from '../ui/badge';
import { MatchCard } from '../matches/MatchCard';
import { mockMatches } from '../../data/mockData';
import { Zap } from 'lucide-react';

export function LiveBetting() {
  const liveMatches = mockMatches.filter((m) => m.isLive);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-white text-3xl font-bold">Live Betting</h1>
          <Badge className="bg-red-500 text-white border-0 animate-pulse">
            <Zap className="h-3 w-3 mr-1" />
            LIVE
          </Badge>
        </div>
        <p className="text-slate-400">
          Bet on live matches as the action unfolds
        </p>
      </div>

      {liveMatches.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="h-8 w-8 text-slate-600" />
          </div>
          <p className="text-slate-400">No live matches at the moment</p>
          <p className="text-slate-500 text-sm mt-2">Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {liveMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
}
