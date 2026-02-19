import { useParams, Link } from 'react-router';
import { Badge } from '../ui/badge';
import { MatchCard } from '../matches/MatchCard';
import { mockMatches } from '../../data/mockData';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

export function Sports() {
  const { sport } = useParams();
  const sportName = sport
    ? sport.charAt(0).toUpperCase() + sport.slice(1)
    : 'Soccer';

  const sportMatches = mockMatches.filter(
    (m) => m.sport.toLowerCase() === sport?.toLowerCase()
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon" className="text-slate-400">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-white text-3xl font-bold">{sportName}</h1>
            <Badge className="bg-slate-800 text-slate-300 border-slate-700">
              {sportMatches.length} matches
            </Badge>
          </div>
          <p className="text-slate-400">All {sportName.toLowerCase()} matches</p>
        </div>
      </div>

      {sportMatches.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚽</span>
          </div>
          <p className="text-slate-400">No matches available</p>
          <p className="text-slate-500 text-sm mt-2">Check back later!</p>
        </div>
      ) : (
        <>
          {sportMatches.some((m) => m.isLive) && (
            <div>
              <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                Live Now
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {sportMatches
                  .filter((m) => m.isLive)
                  .map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Upcoming</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {sportMatches
                .filter((m) => !m.isLive)
                .map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
