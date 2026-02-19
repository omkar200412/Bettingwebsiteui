import { X, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { useBetting } from '../../context/BettingContext';
import { useState } from 'react';
import { toast } from 'sonner';

export function BettingSlip() {
  const { bets, removeBet, clearBets, placeBets, updateStake, balance } =
    useBetting();
  const [isOpen, setIsOpen] = useState(false);

  const totalStake = bets.reduce((sum, bet) => sum + bet.stake, 0);
  const totalOdds = bets.reduce((product, bet) => product * bet.odds, 1);
  const potentialWin = totalStake * totalOdds;

  const handlePlaceBets = () => {
    if (bets.length === 0) {
      toast.error('Add bets to your slip first');
      return;
    }
    if (totalStake > balance) {
      toast.error('Insufficient balance');
      return;
    }
    if (totalStake === 0) {
      toast.error('Enter stake amounts');
      return;
    }

    placeBets(totalStake);
    toast.success('Bets placed successfully!');
  };

  return (
    <>
      {/* Mobile floating button */}
      {bets.length > 0 && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-emerald-600 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
        >
          <span className="font-semibold">Bet Slip ({bets.length})</span>
          <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {bets.length}
          </span>
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Betting slip */}
      <aside
        className={`
          fixed lg:sticky top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-96 bg-slate-900 border-l border-slate-800 z-50 
          transition-transform duration-300 lg:translate-x-0 flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-white font-semibold">Bet Slip</h2>
          <div className="flex items-center gap-2">
            {bets.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearBets}
                className="text-slate-400 hover:text-white h-8"
              >
                Clear All
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-400 hover:text-white h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bets.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎲</span>
              </div>
              <p className="text-slate-400">Your bet slip is empty</p>
              <p className="text-slate-500 text-sm mt-2">
                Click on odds to add bets
              </p>
            </div>
          ) : (
            bets.map((bet) => (
              <Card key={bet.id} className="bg-slate-800 border-slate-700 p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">
                      {bet.matchName}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">{bet.betType}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-slate-400 hover:text-white -mt-1"
                    onClick={() => removeBet(bet.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 text-sm font-semibold">
                    {bet.selection}
                  </span>
                  <span className="text-white font-semibold">{bet.odds}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-sm">Stake:</span>
                  <Input
                    type="number"
                    value={bet.stake || ''}
                    onChange={(e) =>
                      updateStake(bet.id, Number(e.target.value))
                    }
                    className="bg-slate-700 border-slate-600 text-white h-8"
                    placeholder="0"
                    min="0"
                  />
                </div>
              </Card>
            ))
          )}
        </div>

        {bets.length > 0 && (
          <div className="border-t border-slate-800 p-4 space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Stake</span>
                <span className="text-white font-semibold">
                  ${totalStake.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Odds</span>
                <span className="text-white font-semibold">
                  {totalOdds.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-2">
                <span className="text-white font-semibold">Potential Win</span>
                <span className="text-emerald-400 font-bold">
                  ${potentialWin.toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              onClick={handlePlaceBets}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={totalStake === 0 || totalStake > balance}
            >
              Place Bet{bets.length > 1 ? 's' : ''}
            </Button>
            {totalStake > balance && (
              <p className="text-red-400 text-xs text-center">
                Insufficient balance
              </p>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
