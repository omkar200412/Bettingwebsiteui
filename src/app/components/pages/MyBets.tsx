import { useBetting } from '../../context/BettingContext';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { format } from 'date-fns';
import { Receipt, Trophy, X, Clock } from 'lucide-react';

export function MyBets() {
  const { placedBets } = useBetting();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'won':
        return 'bg-emerald-500';
      case 'lost':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'won':
        return <Trophy className="h-4 w-4" />;
      case 'lost':
        return <X className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const stats = {
    total: placedBets.length,
    won: placedBets.filter((b) => b.status === 'won').length,
    lost: placedBets.filter((b) => b.status === 'lost').length,
    pending: placedBets.filter((b) => b.status === 'pending').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-3xl font-bold mb-2">My Bets</h1>
        <p className="text-slate-400">Track your betting history and results</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-4">
          <p className="text-slate-400 text-sm mb-1">Total Bets</p>
          <p className="text-white text-2xl font-bold">{stats.total}</p>
        </Card>
        <Card className="bg-emerald-500/10 border-emerald-500/20 p-4">
          <p className="text-emerald-400 text-sm mb-1">Won</p>
          <p className="text-white text-2xl font-bold">{stats.won}</p>
        </Card>
        <Card className="bg-red-500/10 border-red-500/20 p-4">
          <p className="text-red-400 text-sm mb-1">Lost</p>
          <p className="text-white text-2xl font-bold">{stats.lost}</p>
        </Card>
        <Card className="bg-yellow-500/10 border-yellow-500/20 p-4">
          <p className="text-yellow-400 text-sm mb-1">Pending</p>
          <p className="text-white text-2xl font-bold">{stats.pending}</p>
        </Card>
      </div>

      {/* Bets List */}
      <div className="space-y-3">
        {placedBets.length === 0 ? (
          <Card className="bg-slate-900 border-slate-800 p-12 text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="h-8 w-8 text-slate-600" />
            </div>
            <p className="text-slate-400">No bets placed yet</p>
            <p className="text-slate-500 text-sm mt-2">
              Start betting to see your history here
            </p>
          </Card>
        ) : (
          placedBets.map((bet) => (
            <Card
              key={bet.id}
              className="bg-slate-900 border-slate-800 p-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      className={`${getStatusColor(
                        bet.status
                      )} text-white border-0`}
                    >
                      <span className="flex items-center gap-1">
                        {getStatusIcon(bet.status)}
                        {bet.status.toUpperCase()}
                      </span>
                    </Badge>
                    <span className="text-slate-500 text-xs">
                      {format(bet.placedAt, 'MMM dd, yyyy HH:mm')}
                    </span>
                  </div>
                  <p className="text-white font-semibold mb-1">
                    {bet.matchName}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-400">{bet.betType}:</span>
                    <span className="text-emerald-400">{bet.selection}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-white font-semibold">
                      {bet.odds}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm mb-1">Stake</p>
                  <p className="text-white font-semibold mb-2">
                    ${bet.stake.toFixed(2)}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {bet.status === 'won' ? 'Won' : 'Potential Win'}
                  </p>
                  <p
                    className={`font-bold ${
                      bet.status === 'won'
                        ? 'text-emerald-400'
                        : bet.status === 'lost'
                        ? 'text-red-400'
                        : 'text-slate-300'
                    }`}
                  >
                    ${bet.potentialWin.toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
