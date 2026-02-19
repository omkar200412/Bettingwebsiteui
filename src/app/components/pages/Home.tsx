import { Link } from 'react-router';
import { Trophy, TrendingUp, Zap, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MatchCard } from '../matches/MatchCard';
import { mockMatches } from '../../data/mockData';

export function Home() {
  const featuredMatches = mockMatches.filter((m) => m.featured).slice(0, 4);
  const liveMatches = mockMatches.filter((m) => m.isLive).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-emerald-600 to-teal-700 border-0 p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white border-0">
              Welcome to BetMaster
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Bet on Your Favorite Sports
            </h1>
            <p className="text-emerald-50 text-lg">
              Join thousands of winners. Place your bets with confidence.
            </p>
            <div className="flex gap-3">
              <Link to="/live">
                <Button className="bg-white text-emerald-700 hover:bg-emerald-50">
                  <Zap className="h-4 w-4 mr-2" />
                  Live Betting
                </Button>
              </Link>
              <Link to="/sports/soccer">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Sports
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-6xl md:text-8xl">🏆</div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Trophy className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Active Events</p>
              <p className="text-white text-2xl font-bold">248</p>
            </div>
          </div>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Live Now</p>
              <p className="text-white text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>
        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Today's Winners</p>
              <p className="text-white text-2xl font-bold">1,234</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Live Matches */}
      {liveMatches.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-white text-2xl font-bold">Live Now</h2>
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <Link to="/live">
              <Button variant="ghost" className="text-emerald-400">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Featured Matches */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-bold">Featured Matches</h2>
          <Link to="/sports/soccer">
            <Button variant="ghost" className="text-emerald-400">
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {featuredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Upcoming Today */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-slate-400" />
          <h2 className="text-white text-2xl font-bold">Starting Soon</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockMatches
            .filter((m) => !m.isLive)
            .slice(0, 6)
            .map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
        </div>
      </div>
    </div>
  );
}
